import { Component } from '@angular/core';

import { PcPage } from '../pc/pc';
import { CauePage } from '../caue/caue';
import { RafinhaPage } from '../rafinha/rafinha';
import { AdmobProvider } from '../../providers/admob/admob';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RafinhaPage;
  tab2Root = PcPage;
  tab3Root = CauePage;

  constructor(
    public admob: AdmobProvider,
  ) {
    this.admob.showBanner();

    setInterval(() => {
      this.admob.showInterstitial()
    }, 300000);
  }
}
