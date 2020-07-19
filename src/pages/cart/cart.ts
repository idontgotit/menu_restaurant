import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SoupSaladPage } from '../soup-salad/soup-salad';
import { CowPage } from '../cow/cow';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController) {
  }
  goToSoupSalad(params){
    if (!params) params = {};
    this.navCtrl.push(SoupSaladPage);
  }goToCow(params){
    if (!params) params = {};
    this.navCtrl.push(CowPage);
  }
}
