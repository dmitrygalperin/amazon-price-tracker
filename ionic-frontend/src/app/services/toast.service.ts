import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  presentToast(msg, position) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: position
  });

  toast.present();
}

}
