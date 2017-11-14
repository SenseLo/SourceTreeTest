import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, JsonpModule } from "@angular/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { UserInfoModule } from "../pages/userInfo/userInfo.module";
import { MinePageModule } from '../pages/mine/mine.module';
import { DetailPageModule } from '../pages/detail/detail.module';



import { NativeService } from '../provider/NativeService';
import { TabsService } from '../provider/TabsService';
import { ShopCarPage } from '../pages/shopcar/shopcar';
import { IonicStorageModule } from '@ionic/storage';
import { GlobalData } from '../provider/GlobalData';
import { Logger } from '../provider/Logger';
import { AppVersion } from '@ionic-native/app-version';
import { AppMinimize } from '@ionic-native/app-minimize';
import { Camera } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
import { Diagnostic } from '@ionic-native/diagnostic';
import { CallNumber } from '@ionic-native/call-number';
import { Transfer, TransferObject } from '@ionic-native/transfer';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CityDataServive } from '../provider/city-picker';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopCarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      mode: 'ios',
      iconMode: 'ios',
      tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    UserInfoModule,
    MinePageModule,
    DetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopCarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeService,
    AppVersion,
    AppMinimize,
    TabsService,
    GlobalData,
    Camera,
    Toast,
    Network,
    Diagnostic,
    Logger,
    CallNumber,
    BarcodeScanner,
    CityDataServive,
    Transfer,
    TransferObject,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
