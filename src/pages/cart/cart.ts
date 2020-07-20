import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';
import { SoupSaladPage } from '../soup-salad/soup-salad';
import { CowPage } from '../cow/cow';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  modalDismissData: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  goToSoupSalad(params){
    if (!params) params = {};
    this.navCtrl.push(SoupSaladPage);
  }goToCow(params){
    if (!params) params = {};
    this.navCtrl.push(CowPage);
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
