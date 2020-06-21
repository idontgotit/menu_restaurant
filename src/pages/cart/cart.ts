import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SoupPage } from '../soup/soup';
import { SaladPage } from '../salad/salad';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController) {
  }
  goToSoup(params){
    if (!params) params = {};
    this.navCtrl.push(SoupPage);
  }goToSalad(params){
    if (!params) params = {};
    this.navCtrl.push(SaladPage);
  }
}
