import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';

@Injectable()
export class AdmobProvider {

  constructor(
    public admob: AdMobFree,
    public platform: Platform,
  ) { }

  showBanner() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: "ca-app-pub-8004728799643039/4551585348",
      isTesting: false,
      autoShow: true,
      bannerAtTop: false,      
    };
    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare()
      .then(() => {
        console.log("Show banner")
        this.admob.banner.show();
      })
      .catch(e => console.log(e));
  }

  showInterstitial() {
    if (this.platform.is('cordova')) {
      let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: false,
        autoShow: true,
        id: "ca-app-pub-8004728799643039/1679678297",
      };

      this.admob.interstitial.config(interstitialConfig);

      this.admob.interstitial.prepare().then(() => {
        console.log('Interstitial show')
      });

    }
  }

}
