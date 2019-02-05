import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Injectable } from '@angular/core';

@Injectable()
export class SoundServiceProvider {

  audioType: string = 'html5';
  sounds: any = [];
  key: string = "1";

  constructor(public nativeAudio: NativeAudio, platform: Platform) {

    if (platform.is('cordova')) {
      this.audioType = 'native'
    }
  }

  preload(key: string, asset: string): void {

    if (this.audioType === 'html5') {
      let audio = {
        key: key,
        asset: asset,
        type: 'html5'
      };
      this.sounds.push(audio);

    } else {
      this.nativeAudio.preloadSimple(key, asset);

      let audio = {
        key: key,
        asset: key,
        type: 'native'
      };

      this.sounds.push(audio);
    }
  }

  play(key: string): void {
    let audio = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if (audio.type === 'html5') {
      let audioAsset = new Audio(audio.asset);
      audioAsset.play();

    } else {
      this.nativeAudio.stop(this.key)
        .then(() => {
          this.key = key
          this.nativeAudio.play(audio.asset).then((res) => {
            console.log(res);
          }, (err) => {
            console.log(err);
          })});
    }

  }

}
