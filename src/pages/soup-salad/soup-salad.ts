import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';

import { SelectionPage } from '../selection/selection';
import { SoupPage } from '../soup/soup'
@Component({
  selector: 'page-soup-salad',
  templateUrl: 'soup-salad.html'
})
export class SoupSaladPage {

  constructor(public navCtrl: NavController) {
  }
  goToSoupSalad(params) {
    if (!params) params = {};
    this.navCtrl.push(SoupPage);
  } goToCow(params) {
    if (!params) params = {};
  }

}


