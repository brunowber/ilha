import { Soms } from '../../models/soms';
import { SoundServiceProvider } from '../../providers/sound-service/sound-service';
import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AdmobProvider } from '../../providers/admob/admob';
import { SocialShareServiceProvider } from '../../providers/social-share-service/social-share-service';
import { CargaInicialProvider } from '../../providers/carga-inicial/carga-inicial';

@Component({
  selector: 'page-pc',
  templateUrl: 'pc.html'
})
export class PcPage {

  soms: any[] = []

  constructor(
    public navCtrl: NavController,
    public soundService: SoundServiceProvider,
    private socialShare: SocialShareServiceProvider,
    public actionSheetCtrl: ActionSheetController,
    public cargaInicialProv: CargaInicialProvider,
  ) { }

  ionViewDidEnter(): void {
    if (this.soms.length == 0) {
      this.cargaInicial("201", "agora_eu_to_ne.mp3", "agora_eu_to_ne.jpeg")
      this.cargaInicial("202", "asmr_dela.mp3", "asmr_dela.jpeg")
      this.cargaInicial("203", "bate_pra_anime.mp3", "bate_pra_anime.jpeg")
      this.cargaInicial("204", "lugar_onde_jesus_nao_ve.mp3", "lugar_onde_jesus_nao_ve.jpeg")
      this.cargaInicial("205", "pau_no_cu_do_seu_vo.mp3", "pau_no_cu_do_seu_vo.jpeg")
      this.cargaInicial("206", "se_tivesse_comido_cu.mp3", "se_tivesse_comido_cu.jpeg")
      this.cargaInicial("207", "segura_lingua.mp3", "segura_lingua.jpeg")
      this.cargaInicial("208", "sipa_emagrecer.mp3", "sipa_emagrecer.jpeg")
      this.cargaInicial("209", "eu_mesmo_bato_umas.mp3", "eu_mesmo_bato_umas.jpeg")
      this.cargaInicial("210", "jesus_chora.mp3", "jesus_chora.jpeg")
      this.cargaInicial("211", "papai_noel.mp3", "papai_noel.jpeg")
    }
  }

  play(som: Soms): void {
    console.log(som)
    this.soundService.play(som.id)
  }

  cargaInicial(id: string, caminho_audio: string, caminho_imagem: string): void {
    let som:Soms = this.cargaInicialProv.cargaInicial(id, caminho_audio, caminho_imagem, "pc")
    this.soms.push(som)
    this.soundService.preload(som.id, som.sound_src);
  }

  public presentActionSheet(som: Soms): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione aonde deseja compartilhar',
      buttons: [
        {
          text: 'Compartilhar som no WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialShare.shareWhatsApp(som);
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
    actionSheet.present();
  }


}
