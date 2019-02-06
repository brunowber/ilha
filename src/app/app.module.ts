import { PcPage } from './../pages/pc/pc';
import { RafinhaPage } from './../pages/rafinha/rafinha';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CauePage } from '../pages/caue/caue';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';
import { SoundServiceProvider } from '../providers/sound-service/sound-service';
import { AdmobProvider } from '../providers/admob/admob';
import { AdMobFree } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SocialShareServiceProvider } from '../providers/social-share-service/social-share-service';
import { CargaInicialProvider } from '../providers/carga-inicial/carga-inicial';
import { AboutPage } from '../pages/about/about';
import { ToastProvider } from '../providers/toast/toast';
import { PresentActionProvider } from '../providers/present-action/present-action';


@NgModule({
  declarations: [
    MyApp,
    PcPage,
    CauePage,
    RafinhaPage,
    TabsPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PcPage,
    CauePage,
    RafinhaPage,
    TabsPage, 
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SoundServiceProvider,
    AdmobProvider,
    AdMobFree,
    SocialSharing,
    SocialShareServiceProvider,
    CargaInicialProvider,
    ToastProvider,
    PresentActionProvider,
  ]
})
export class AppModule {}
