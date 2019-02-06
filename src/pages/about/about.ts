import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  height: number = 140;

  constructor(
    public navCtrl: NavController,
    public platform: Platform
    ) {
    if (this.platform.is("tablet")){
      this.height = 250;
    }
  }

  swipe(event: any): void {
    console.log(event.direction)
    if(event.direction === 4) {
      this.navCtrl.parent.select(2);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
