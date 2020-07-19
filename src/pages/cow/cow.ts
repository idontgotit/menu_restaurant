import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';
@Component({
  selector: 'page-cow',
  templateUrl: 'cow.html'
})
export class CowPage {
  modalDismissData: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  openModal() {
    const profileModal = this.modalCtrl.create(NewModalPage, {}, );
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.modalDismissData = JSON.stringify(data);
    });

    profileModal.present();
  }
}
