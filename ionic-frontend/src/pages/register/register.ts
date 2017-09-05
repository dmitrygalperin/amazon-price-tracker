import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ValidateService } from '../../app/services/validate.service';
import { AuthService } from '../../app/services/auth.service';
import { ToastService } from '../../app/services/toast.service';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  name: String;
  username: String;
  email: String;
  password: String;
  verifyPassword: String;
  loading: Boolean;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private toastService: ToastService,
    private navCtrl: NavController
  ) {
    this.loading = false;
  }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //Required fields
    if(!this.validateService.validateRegister(user)) {
      this.toastService.presentToast('Please fill in all fields.','top');
      return false;
    }

    //Validate email
    if(!this.validateService.validateEmail(user.email)) {
      this.toastService.presentToast('Please enter a valid email address.','top');
      return false;
    }

    if(!this.validateService.validatePassword(user.password, this.verifyPassword)) {
      this.toastService.presentToast('Passwords do not match.','top');
      return false;
    }

    //Register User
    this.loading = true;
    this.authService.registerUser(user).subscribe(data => {
      this.loading = false;
      if(data.success) {} {
        this.navCtrl.pop();
      }
      this.toastService.presentToast(data.msg, 'top');
    });

  }

  onCancel() {
    this.navCtrl.pop();
  }
}
