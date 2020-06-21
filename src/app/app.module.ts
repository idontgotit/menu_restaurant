import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1Page } from '../pages/page1/page1';
import { CartPage } from '../pages/cart/cart';
import { CloudPage } from '../pages/cloud/cloud';
import { SoupPage } from '../pages/soup/soup';
import { SaladPage } from '../pages/salad/salad';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { NewModalPageModule } from '../pages/new-modal/new-modal.module';

import { SelectionPageModule } from '../pages/selection/selection.module';

@NgModule({
  declarations: [
    MyApp,
    Page1Page,
    CartPage,
    CloudPage,
    SoupPage,
    SaladPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    NewModalPageModule,
    SelectionPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,
    CartPage,
    CloudPage,
    SoupPage,
    SaladPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}