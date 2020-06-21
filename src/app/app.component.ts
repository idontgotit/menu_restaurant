import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { CartPage } from '../pages/cart/cart';
import { Page1Page } from '../pages/page1/page1';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = CartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage1(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page1Page);
  }
  goToPageMenu(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CartPage);
  }
}
