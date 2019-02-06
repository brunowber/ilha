import { Soms } from '../../models/soms';
import { SoundServiceProvider } from '../../providers/sound-service/sound-service';
import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { SocialShareServiceProvider } from '../../providers/social-share-service/social-share-service';
import { CargaInicialProvider } from '../../providers/carga-inicial/carga-inicial';
import { PresentActionProvider } from '../../providers/present-action/present-action';

@Component({
  selector: 'page-caue',
  templateUrl: 'caue.html'
})
export class CauePage {

  soms: any[] = [];
  height: number = 140;

  constructor(
    public navCtrl: NavController,
    public soundService: SoundServiceProvider,
    public actionSheetCtrl: ActionSheetController,
    public cargaInicialProv: CargaInicialProvider,
    public platform: Platform,
    public presentAction: PresentActionProvider,
  ) { }

  ionViewDidEnter(): void {
    if (this.platform.is("tablet")){
      this.height = 250;
    }
    if (this.soms.length == 0) {
      this.cargaInicial("101", "cinco_anos_sem_fuder.mp3", "cinco_anos_sem_fuder.jpeg")
      this.cargaInicial("102", "cu_blindado.mp3", "cu_blindado.jpeg")
      this.cargaInicial("103", "dona_ilda.mp3", "dona_ilda.jpeg")
      this.cargaInicial("104", "fale_putaria_mesmo.mp3", "fale_putaria_mesmo.jpeg")
      this.cargaInicial("105", "feto_nene.mp3", "feto_nene.jpeg")
      this.cargaInicial("106", "guerra_as_drogas.mp3", "guerra_as_drogas.jpeg")
      this.cargaInicial("107", "mete_a_rola.mp3", "mete_a_rola.jpeg")
      this.cargaInicial("108", "punheta_igual_cafe.mp3", "punheta_igual_cafe.jpeg")
      this.cargaInicial("109", "filho_mae_atriz.mp3", "filho_mae_atriz.jpeg")
      this.cargaInicial("110", "sociedade_fodase.mp3", "sociedade_fodase.jpeg")
      this.cargaInicial("111", "tirar_10.mp3", "tirar_10.jpeg")
      this.cargaInicial("112", "talarico.mp3", "talarico.jpeg")
      this.cargaInicial("113", "labio_vaginal.mp3", "labio_vaginal.jpeg")
      this.cargaInicial("114", "as_namoradinhas.mp3", "as_namoradinhas.jpeg")
    }
  }

  swipe(event: any): void {
    console.log(event.direction)
    if(event.direction === 2) {
      this.navCtrl.parent.select(3);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
  }

  play(som: Soms): void {
    this.soundService.play(som.id, som.sound_src)
  }

  cargaInicial(id: string, caminho_audio: string, caminho_imagem: string): void {
    let som:Soms = this.cargaInicialProv.cargaInicial(id, caminho_audio, caminho_imagem, "caue")
    this.soms.push(som)
  }

  public presentActionSheet(som: Soms): void {
    let actionSheet = this.presentAction.PresentActionSheet(som);
    actionSheet.present();
  }

}
