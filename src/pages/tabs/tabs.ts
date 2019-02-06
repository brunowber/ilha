import { Component } from '@angular/core';

import { PcPage } from '../pc/pc';
import { CauePage } from '../caue/caue';
import { RafinhaPage } from '../rafinha/rafinha';
import { AdmobProvider } from '../../providers/admob/admob';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RafinhaPage;
  tab2Root = PcPage;
  tab3Root = CauePage;
  tab4Root = AboutPage;

  constructor(
    public admob: AdmobProvider,
  ) {
    this.admob.showBanner();

    setInterval(() => {
      this.admob.showInterstitial()
    }, 300000);
  }
}
