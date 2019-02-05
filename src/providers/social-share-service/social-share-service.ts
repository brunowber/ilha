import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Soms } from '../../models/soms';

@Injectable()
export class SocialShareServiceProvider {

  constructor(
    private socialShare: SocialSharing,
    ) 
    {}

    shareWhatsApp(som: Soms): void{
      this.socialShare.shareViaWhatsApp(null,"www/"+som.sound_src, null);
    }

    shareWhatsAppFoto(som: Soms): void{
      this.socialShare.shareViaWhatsApp(null,"www/"+som.img_src, null);
    }

    shareTwitter(som: Soms): void{
      this.socialShare.shareViaTwitter(null,"www/"+som.img_src, null);
    }

    shareInstagram(som: Soms): void{
      this.socialShare.shareViaInstagram(null,"www/"+som.img_src);
    }

    shareFacebook(som: Soms): void{
      this.socialShare.shareViaFacebook(null,"www/"+som.img_src, null);
    }


}