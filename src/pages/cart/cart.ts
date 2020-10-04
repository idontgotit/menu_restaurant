import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';
import { SoupSaladPage } from '../soup-salad/soup-salad';
import { CowPage } from '../cow/cow';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  modalDismissData: any;
  total: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,  public storage: Storage,) {
    this.total = 0
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
      this.calculateTotal()
    });

    profileModal.present();
  }

  calculateTotal(){
    this.storage.get('current_total').then((val) => {
      console.log('current_total is', val);
      if (val != null && !isNaN(val)) {
        this.total = parseInt(val)
      }else{
        this.total = 0
      }
    });
  }

  ionViewDidEnter() {
    this.calculateTotal()
  }

}
