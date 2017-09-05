import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { App } from 'ionic-angular';

import { AuthService } from '../../app/services/auth.service';

import { LoginPage } from '../login/login';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: Object

  constructor(
    public navCtrl: NavController,
    public app: App,
    public alertCtrl: AlertController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.authService.logout();
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Logout?',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Logout',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    confirm.present();
  }

}
