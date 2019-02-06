import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Soms } from '../../models/soms';

@Injectable()
export class SocialShareServiceProvider {

  link: string = "https://play.google.com/store/apps/details?id=ilha.barbados.frases";

  constructor(
    private socialShare: SocialSharing,
  ) { }

  shareWhatsApp(som: Soms): Promise<string> {
    return this.socialShare.shareViaWhatsApp(null, "www/" + som.sound_src, null)
      .then((sucesso) => { return "Compartilhado no Whatsapp sucesso" })
      .catch((error) => {
        return "Algum erro ocorreu ao compartilhar no Whatsapp"
      })
  }

  shareWhatsAppFoto(som: Soms): void {
    this.socialShare.shareViaWhatsApp(null, "www/" + som.img_src, this.link)
    .then((sucesso) => { return "Compartilhado no Whatsapp sucesso" })
      .catch((error) => {
        return "Algum erro ocorreu ao compartilhar no Whatsapp"
      })
  }

  shareTwitter(som: Soms): void {
    this.socialShare.shareViaTwitter(null, "www/" + som.img_src, this.link)
    .then((sucesso) => { return "Compartilhado no Twitter sucesso" })
      .catch((error) => {
        return "Algum erro ocorreu ao compartilhar no Twitter"
      })
  }

  shareInstagram(som: Soms): void {
    this.socialShare.shareViaInstagram(null, "www/" + som.img_src)
    .then((sucesso) => { return "Compartilhado no Instagram sucesso" })
      .catch((error) => {
        return "Algum erro ocorreu ao compartilhar no Instagram"
      })
  }

  shareFacebook(som: Soms): void {
    this.socialShare.shareViaFacebook(null, "www/" + som.img_src, this.link)
    .then((sucesso) => { return "Compartilhado no Facebook sucesso" })
      .catch((error) => {
        return "Algum erro ocorreu ao compartilhar no Facebook"
      })
  }
}
