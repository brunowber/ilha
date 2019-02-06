import { Injectable } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { SocialShareServiceProvider } from '../social-share-service/social-share-service';
import { ToastProvider } from '../toast/toast';
import { Soms } from '../../models/soms';

@Injectable()
export class PresentActionProvider {

  constructor(
    public actionSheetCtrl: ActionSheetController,
    private socialShare: SocialShareServiceProvider,
    private toastProv: ToastProvider,
    ) {}

  PresentActionSheet(som: Soms){
    return this.actionSheetCtrl.create({
      title: 'Selecione aonde deseja compartilhar',
      buttons: [
        {
          text: 'Compartilhar som no WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialShare.shareWhatsApp(som)
            .then((msg: string) => {
              this.toastProv.presentToast(msg);
            })
          }
        },
        {
          text: 'Compartilhar foto no WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialShare.shareWhatsAppFoto(som);
          }
        },
        {
          text: 'Compartilhar no Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.socialShare.shareTwitter(som)
          }
        },
        {
          text: 'Compartilhar no Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.socialShare.shareFacebook(som)
          }
        },
        {
          text: 'Compartilhar no Instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.socialShare.shareInstagram(som)
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
  }

}
