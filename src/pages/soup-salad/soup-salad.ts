import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';

import { SelectionPage } from '../selection/selection';
import { SoupPage } from '../soup/soup'
import { SaladPage } from '../salad/salad';
@Component({
  selector: 'page-soup-salad',
  templateUrl: 'soup-salad.html'
})
export class SoupSaladPage {
  modalDismissData: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  goToSoupSalad(params) {
    if (!params) params = {};
    this.navCtrl.push(SoupPage);
  } goToSalad(params) {
    if (!params) params = {};
    this.navCtrl.push(SaladPage);
  }

  openModal() {



    const profileModal = this.modalCtrl.create(NewModalPage, {},);
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.modalDismissData = JSON.stringify(data);
    });

    profileModal.present();
  }

}


