import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';
import { RegisterPage } from '../../pages/register/register';

import { AuthService } from '../../app/services/auth.service';
import { ToastService } from '../../app/services/toast.service';
import { ValidateService } from '../../app/services/validate.service'

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: String
  password: String
  loading: Boolean = false

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private validateService: ValidateService,
    private toastService: ToastService
  ) {}

  onLoginSubmit() {
    this.loading = true;

    const user = {
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateLogin(user)) {
      this.loading = false;
      this.toastService.presentToast('Please enter a username and password', 'bottom');
      return;
    }

    this.authService.authenticateUser(user).subscribe(data => {
      this.loading = false;
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.toastService.presentToast('Invalid username or password', 'bottom');
      }
    });
  }

  register() {
    //this.navCtrl.setRoot(RegisterPage);
    this.navCtrl.push(RegisterPage);
  }
}
