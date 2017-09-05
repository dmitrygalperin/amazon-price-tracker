import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ItemService } from '../../app/services/item.service';
import { AuthService } from '../../app/services/auth.service';
import { ToastService } from '../../app/services/toast.service';

import { TrackedPage } from '../tracked/tracked';

import { Chart } from 'chart.js';
import * as moment from 'moment';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  @ViewChild('chartCanvas') chartCanvas;

  item: any;
  chart: any;
  timeFormat: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public alertCtrl: AlertController,
    private itemService: ItemService,
    private toastService: ToastService,
    private authService: AuthService,
  ) {
    this.item = params.get('item');
    this.timeFormat = 'MM/DD/YYYY HH:mm';
  }

  ionViewDidLoad() {
    if(this.item.previousPrices.length == 0) return;
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          data: this.formatItemPrices(),
          label: "Price",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
      },
  	  options: {
        title:{
          text: "Chart.js Time Scale"
        },
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(toolTipItem, data) {
              return '$' + toolTipItem.yLabel;
            }
          }
        },
        scales: {
          xAxes: [{
            type: "time",
            time: {
              format: this.timeFormat,
              // round: 'day'
              tooltipFormat: 'll HH:mm'
            },
            scaleLabel: {
              display: false,
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: false,
            },
            ticks: {
              callback: function(value, index, values) {
                return value.toLocaleString("en-US",{style:"currency", currency:"USD"}) ;
              }
            }
          }]
        }
      }
    });
  }

  doRefresh(refresher) {
    this.updateItemData();

    setTimeout(() => {
      refresher.complete();
    }, 1500);
  }

  newDate(days) {
    return moment().add(days, 'd').toDate();
  }

  newDateString(days) {
    return moment().add(days, 'd').format(this.timeFormat);
  }

  newTimestamp(days) {
    return moment().add(days, 'd').unix();
  }

  formatItemPrices() {
    var prices = []
    for(var i = 0; i < this.item.previousPrices.length; i++) {
      prices.push({
        x: new Date(this.item.previousPrices[i].date),
        y: this.item.previousPrices[i].price/100
      });
    }
    prices.push({
      x: new Date(this.item.salePrice.date),
      y: this.item.salePrice.price/100
    });
    return prices;
  }

  removeItem(asin) {
    this.itemService.removeItem(asin).subscribe(data => {
      if(data.success) {
        var user = JSON.parse(localStorage.getItem('user'));
        var index = user.trackedItems.indexOf(asin);
        user.trackedItems.splice(index, 1);
        this.authService.storeUserData(null, user);
        this.navCtrl.setRoot(TrackedPage);
      }
      this.toastService.presentToast(data.msg, 'top');
    });
  }

  showConfirm(asin) {
    let confirm = this.alertCtrl.create({
      title: 'Stop tracking?',
      message: 'Are you sure you want to stop tracking this item?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Remove',
          handler: () => {
            this.removeItem(asin);
          }
        }
      ]
    });
    confirm.present();
  }

  updateItemData() {
    this.itemService.getItemByAsin(this.item.asin)
      .subscribe(data => {
        this.item = data.itemData;
      });
  }


}
