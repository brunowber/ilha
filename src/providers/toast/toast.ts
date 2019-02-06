import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(public toast:ToastController) {}

  public presentToast(text: string) {
    let toast = this.toast.create({
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
 

}
