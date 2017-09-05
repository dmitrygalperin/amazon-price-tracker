import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { ItemService } from '../../app/services/item.service';
import { AuthService } from '../../app/services/auth.service';
import { ToastService } from '../../app/services/toast.service';

import { DetailsPage } from '../details/details';

@Component({
  selector: 'tracked',
  templateUrl: 'tracked.html'
})
export class TrackedPage {
  items: Object[]
  loading: Boolean = false;
  refreshing: Boolean = false;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private itemService: ItemService,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.items = [];
  }

  ngOnInit() {
    this.loadProfile();
  }

  doRefresh(refresher) {
    this.refreshing = true;
    this.items = []
    this.loadProfile();

    setTimeout(() => {
      this.refreshing = false;
      refresher.complete();
    }, 1500);
  }

  loadProfile() {
    var user = JSON.parse(localStorage.getItem('user'));
    this.authService.getProfile(user.id || user._id).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(null, data.user);
        this.getItemData(user.trackedItems);
      } else {
        //do something if can't get user profile
      }
    });
  }

  getItemData(items) {
    for(var i = 0; i < items.length; i++) {
      this.itemService.getItemByAsin(items[i])
        .subscribe(data => {
          this.items.push(data.itemData);
        });
    }
  }

  presentTrackPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Track a new item',
      inputs: [
        {
          name: 'url',
          placeholder: 'Paste Amazon product link'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Start Tracking',
          handler: data => {
            var asin = this.itemService.isolateAsin(data.url);
            if(!asin) return this.toastService.presentToast('Invalid URL', 'top');
            this.loading = true;
            this.itemService.addToTracker(asin).subscribe(response => {
              if(response.item) {
                this.items.push(response.item);
                var user = JSON.parse(localStorage.getItem('user'));
                user.trackedItems.push(response.item.asin);
                this.authService.storeUserData(null, user);
              }
              this.toastService.presentToast(response.msg, 'top');
              this.loading = false;
            });
          }
        }
      ]
    });
    alert.present();
  }

  viewDetails(item) {
    this.loading = true;
    //this.items.splice(this.items.indexOf(item.asin), 1);
    //this.getItemData([item.asin]);
    this.navCtrl.push(DetailsPage, {
      item: item
    });
    this.loading = false;
  }

}
