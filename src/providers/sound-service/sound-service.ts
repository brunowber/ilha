import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Injectable } from '@angular/core';
import { AdmobProvider } from '../admob/admob';

@Injectable()
export class SoundServiceProvider {

  audioType: string = 'html5';
  sounds: any = [];
  key: string = "1";
  count: number = 0;

  constructor(
    public nativeAudio: NativeAudio,
    public admob: AdmobProvider,
    ) {
    this.nativeAudio.preloadComplex("1", "assets/sounds/rafinha/agua_na_boca.mp3", 1, 1, 0)
  }

  play(key: string, asset: string): void {
    this.nativeAudio.unload(this.key)
      .then(() => {
        this.nativeAudio.preloadComplex(key, asset, 1, 1, 0)
          .then(() => {
            this.nativeAudio.play(key)
              .then(() => {
                this.count ++;
                this.key = key;
              })
          })
          .catch((erro) => console.log("Erro ao loadar audio: " + erro))
      })
      .catch( (erro) => console.log("Erro ao unload audio: " + erro) )
      if(this.count > 9){
        this.admob.showInterstitial();
        this.count = 0;
      }
  }

}
