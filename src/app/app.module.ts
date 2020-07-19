import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1Page } from '../pages/page1/page1';
import { CartPage } from '../pages/cart/cart';
import { CloudPage } from '../pages/cloud/cloud';
import { SoupPage } from '../pages/soup/soup';
import { SaladPage } from '../pages/salad/salad';
import { SoupSaladPage } from '../pages/soup-salad/soup-salad';
import { CowPage } from '../pages/cow/cow';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { NewModalPageModule } from '../pages/new-modal/new-modal.module';

import { SelectionPageModule } from '../pages/selection/selection.module';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    Page1Page,
    CartPage,
    CloudPage,
    SoupPage,
    SaladPage,
    SoupSaladPage,
    CowPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    NewModalPageModule,
    SelectionPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,  
    CartPage,
    CloudPage,
    SoupPage,
    SaladPage,
    SoupSaladPage,
    CowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}