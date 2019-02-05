import { Soms } from './../../models/soms';
import { SoundServiceProvider } from '../../providers/sound-service/sound-service';
import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { SocialShareServiceProvider } from '../../providers/social-share-service/social-share-service';
import { CargaInicialProvider } from '../../providers/carga-inicial/carga-inicial';

@Component({
  selector: 'page-rafinha',
  templateUrl: 'rafinha.html'
})
export class RafinhaPage {

  soms: any[] = [];
  height: number = 140;

  constructor(
    public navCtrl: NavController,
    public soundService: SoundServiceProvider,
    public actionSheetCtrl: ActionSheetController,
    public socialShare: SocialShareServiceProvider,
    public cargaInicialProv: CargaInicialProvider,
    public platform: Platform,
  ) { }

  ionViewDidEnter(): void {
    if (this.platform.is("tablet")){
      this.height = 250;
    }
    if (this.soms.length == 0) {
      console.log("entrou no som")
      this.cargaInicial("1", "agua_na_boca.mp3", "agua_na_boca.jpeg")
      this.cargaInicial("2", "cabines_anti_jesus.mp3", "cabines_anti_jesus.jpeg")
      this.cargaInicial("3", "aqueta_a_buceta.mp3", "aqueta_a_buceta.jpeg")
      this.cargaInicial("4", "cu_nao_e_que_nem_abraco.mp3", "cu_nao_e_que_nem_abraco.jpeg")
      this.cargaInicial("5", "legaliza_homicidio.mp3", "legaliza_homicidio.jpeg")
      this.cargaInicial("6", "nao_gostar_de_piroca.mp3", "nao_gostar_de_piroca.jpeg")
      this.cargaInicial("7", "chupa_o_cu_dele.mp3", "chupa_o_cu_dele.jpeg")
      this.cargaInicial("8", "continuar_vivo.mp3", "continuar_vivo.jpeg")
      this.cargaInicial("9", "libero_cuzinho.mp3", "libero_cuzinho.jpeg")
      this.cargaInicial("10", "apaixonado_pela_shana.mp3", "apaixonado_pela_shana.jpeg")
      this.cargaInicial("11", "bate_pra_desenho.mp3", "bate_pra_desenho.jpeg")
      this.cargaInicial("12", "dona_florinda.mp3", "dona_florinda.jpeg")
      this.cargaInicial("13", "fodase_seu_pai.mp3", "fodase_seu_pai.jpeg")
      this.cargaInicial("14", "na_capa_do_dvd.mp3", "na_capa_do_dvd.jpeg")
      this.cargaInicial("15", "vai_pra_esteira.mp3", "vai_pra_esteira.jpeg")
      this.cargaInicial("16", "caras_forte.mp3", "caras_forte.jpeg")
      this.cargaInicial("17", "so_no_cuzinho.mp3", "so_no_cuzinho.jpeg")
      this.cargaInicial("18", "broxar.mp3", "broxar.jpeg")
    }
  }

  swipe(event: any): void {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

  play(som: Soms): void {
    this.soundService.play(som.id)
  }

  cargaInicial(id: string, caminho_audio: string, caminho_imagem: string): void {
    let som:Soms = this.cargaInicialProv.cargaInicial(id, caminho_audio, caminho_imagem, "rafinha")
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
