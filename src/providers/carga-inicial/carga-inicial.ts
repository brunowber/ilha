import { Injectable } from '@angular/core';
import { Soms } from '../../models/soms';

@Injectable()
export class CargaInicialProvider {

  imagem_caminho_comum: string = "assets/imgs/";
  som_caminho_comum: string = "assets/sounds/";

  constructor() {}

  cargaInicial(id: string, caminho_audio: string, caminho_imagem: string, pessoa: string): Soms {
    let som: Soms = new Soms(id);
    som.img_src = this.imagem_caminho_comum + pessoa + "/" + caminho_imagem;
    som.sound_src = this.som_caminho_comum + pessoa + "/" + caminho_audio;
    console.log("carga inicial: "+ som)
    return som;
  }
}
