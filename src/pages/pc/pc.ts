import { Soms } from '../../models/soms';
import { SoundServiceProvider } from '../../providers/sound-service/sound-service';
import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { CargaInicialProvider } from '../../providers/carga-inicial/carga-inicial';
import { PresentActionProvider } from '../../providers/present-action/present-action';

@Component({
  selector: 'page-pc',
  templateUrl: 'pc.html'
})
export class PcPage {

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

  swipe(event: any): void {
    if(event.direction === 2) {
      this.navCtrl.parent.select(2);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

  play(som: Soms): void {
    console.log(som)
    this.soundService.play(som.id, som.sound_src)
  }

  cargaInicial(id: string, caminho_audio: string, caminho_imagem: string): void {
    let som:Soms = this.cargaInicialProv.cargaInicial(id, caminho_audio, caminho_imagem, "pc")
    this.soms.push(som)
  }

  public presentActionSheet(som: Soms): void {
    let actionSheet = this.presentAction.PresentActionSheet(som);
    actionSheet.present();
  }
  
}
