import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';

import { SelectionPage } from '../selection/selection';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-soup',
  templateUrl: 'soup.html'
})
export class SoupPage {
  madalDismissData: any;
  selectionDismissData: any;
  menu1: any;
  menu2: any;
  menu3: any;
  menu4: any;
  menu5: any;
  menu6: any;
  menu7: any;
  menu8: any;

  price1: any;
  price2: any;
  price3: any;
  price4: any;
  price5: any;
  price6: any;
  price7: any;

  total: any;

  obj7: any;
  image7: any;
  name7: any;
  select_object7: any;




  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage, ) {
    this.menu1 = 0;

    this.menu2 = 0;
    this.menu3 = 0;
    this.menu4 = 0;
    this.menu5 = 0;
    this.menu6 = 0;
    this.menu7 = 0;
    this.menu8 = 0;


    this.price1 = "50.000"
    this.price2 = "60.000"
    this.price3 = "70.000"
    this.price4 = "80.000"
    this.price5 = "90.000"
    this.price6 = "100.000"
    this.price7 = "110.000"

    this.image7 = ["trau_luoc", "trau_xao"];
    this.name7 = ["trâu luộc nguyên con", "trâu xào 7 món"];
    this.select_object7 = [0, 0]


    this.obj7 = {
      menu: this.menu7,
      price: this.price7,
      image: this.image7,
      name: this.name7,
      select_object: this.select_object7
    }

    this.total = "0"
    this.storage.get('current_total').then((val) => {
      console.log('current_total is', val);
      if (val != null) {
        this.total = parseInt(val)
      }
    });
  }



  increaseValue(event: string, name_value?: string, price?: string) {
    this[name_value]++
    this.total = parseInt(this.total) + parseInt(price.replace('.', ''))
    this.storage.set('current_total', this.total);
  }

  decreaseValue(event: string, name_value?: string, price?: string) {
    if (this[name_value] > 0) {
      this[name_value]--
      this.total = parseInt(this.total) - parseInt(price.replace('.', ''))
      this.storage.set('current_total', this.total);

    }

  }

  buildObjectData() {
    let data = []
    let obj1 = {
      menu: this.menu1,
      price: this.price1,
      name: "Soup thịt",
      image_url: "assets/img/soup_thit.jpg"
    }
    let obj2 = {
      menu: this.menu2,
      price: this.price2,
      name: "Soup gà",
      image_url: "assets/img/soup_ga.jpg"
    }
    return this.storage.get('current_data').then((val) => {
      console.log('current_data is', val);
      if (val != null) {
        data = val
      }
      data.push(obj1)
      data.push(obj2)
      return data
    });
  }

  openModal() {
    this.buildObjectData().then(data => {
      this.storage.set('current_data', data);
      const profileModal = this.modalCtrl.create(NewModalPage, {}, );
      profileModal.onDidDismiss(data => {
        this.madalDismissData = JSON.stringify(data);
      });
      profileModal.present();
    });
  }

  openSelection(obj: any) {
    const selectionModal = this.modalCtrl.create(SelectionPage, { data: obj });
    selectionModal.onDidDismiss(data => {
      console.log(data);
      if (data != undefined) {
        this.increaseValue(null, "menu7", this.price7)
        let selected_item = data.selected_item
        if (selected_item.origin_name == this.image7[0]) {
          this.select_object7[0] = this.select_object7[0] + 1
        }
        if (selected_item.origin_name == this.image7[1]) {
          this.select_object7[1] = this.select_object7[1] + 1
        }
      }
      this.selectionDismissData = JSON.stringify(data);
    });
    selectionModal.present();
  }

  ionViewCanLeave() {
    return new Promise((resolve, reject) => {
      this.buildObjectData().then(data => {
        this.storage.set('current_data', data);
        resolve();
      });
    });
  }
}


