import { Component ,ViewChild} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';

import { SelectionPage } from '../selection/selection';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-soup',
  templateUrl: 'soup.html'
})
export class SoupPage {
  modalDismissData: any;
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
  hide1: any;
  hide2: any;

  @ViewChild('menu1Id') menu1Id ;
  @ViewChild('menu2Id') menu2Id ;





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

    this.total = 0
    this.calculateTotal()
    this.loadStorageData()
    this.hide1 = true;
    this.hide2 = true;
  }



  focusElement(inputElement) {
    setTimeout(() => {
      inputElement.setFocus();
    }, 100);
  }
  increaseValue(event: string, name_value?: string, price?: string) {
    // this[name_value]++
    // this.total = parseInt(this.total) + parseInt(price.replace('.', ''))
    // this.storage.set('current_total', this.total);
    if (name_value == "menu1") {
      this.hide1 = false;
      this.focusElement(this.menu1Id)
    } else {
      this.hide2 = false;
      this.focusElement(this.menu2Id)
    }

  }

  decreaseValue(event: string, name_value?: string, price?: string) {
    if (this[name_value] > 0) {
      let number_will_decrease = 1
      this[name_value]--
      if (this[name_value] < 0) {
        number_will_decrease = 1 + this[name_value]
        this[name_value] = 0
      }
      this.total = parseInt(this.total) - parseFloat(price.replace('.', '')) * number_will_decrease
      this.storage.set('current_total', this.total);

    }

  }

  blurValue(name_value?: string, price?: string) {

    let temp_price: number;
    this[name_value] = parseFloat(this[name_value])
    temp_price = parseFloat(price.replace('.', '')) * this[name_value]
    this.total = parseFloat(this.total) + temp_price
    this.storage.set('current_total', this.total);
    this.hide1 = true;
    this.hide2 = true;
  }

  focusValue(name_value?: string, price?: string) {

    let temp_price: number;
    temp_price = parseFloat(price.replace('.', '')) * this[name_value]
    this.total = parseFloat(this.total) - temp_price
    this.storage.set('current_total', this.total);
  }

  buildObjectData() {
    let data = []
    let obj1 = {
      menu: this.menu1,
      price: this.price1,
      name: "Soup thịt",
      image_url: "assets/img/soup_thit.jpg",
      count_param : "menu1"
    }
    let obj2 = {
      menu: this.menu2,
      price: this.price2,
      name: "Soup gà",
      image_url: "assets/img/soup_ga.jpg",
      count_param : "menu2"
    }
    data.push(obj1)
    data.push(obj2)
    return data
  }

  openModal() {
    this.buildStoreCurrentData().then(data => {
      this.storage.set('current_data', data);
      const profileModal = this.modalCtrl.create(NewModalPage, {}, );
      profileModal.onDidDismiss(data => {
        this.modalDismissData = JSON.stringify(data);
        this.calculateTotal()
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
      this.buildStoreCurrentData().then(data => {
        this.storage.set('current_data', data);
        resolve();
      });
    });
  }

  calculateTotal(){
    this.storage.get('current_total').then((val) => {
      console.log('current_total is', val);
      if (val != null && !isNaN(val)) {
        this.total = parseInt(val)
      }else{
        this.total = 0
        let data = this.buildObjectData()
        data.forEach((item, index) => {
          this[item.count_param] = 0
        });
      }
    });
  }

  ionViewDidEnter() {
    this.calculateTotal()
    this.loadStorageData()
  }

  buildStoreCurrentData(){
    let data = this.buildObjectData()
    return this.storage.get('current_data').then((val) => {
      console.log('current_data is', val);
      let result_return = [];
      if (val != null) {
        val.forEach((item, index) => {
          let temp_url = item.image_url
          let exists_items = data.filter(function(item_data) {
            return item_data.image_url.indexOf(temp_url) >= 0;
          });
          if (exists_items.length > 0){
            debugger
            exists_items.map(o => {
              return o;
            }).forEach(item => result_return.push(item));
          }else{
            result_return.push(item)
          }
        });

        data.forEach((item, index) => {
          let temp_url = item.image_url
          let exists_items = result_return.filter(function(item_data) {
            return item_data.image_url.indexOf(temp_url) >= 0;
          });
          if (exists_items.length > 0){

          }else{
            result_return.push(item)
          }
        });

      } else {
        result_return = data
      }
      return result_return
    });
  }

  loadStorageData(){
    let data = this.buildObjectData()
    this.storage.get('current_data').then((val) => {
      if (val != null && !isNaN(val)) {
        val.forEach((item, index) => {
          let temp_url = item.image_url
          let exists_items = data.filter(function(item_data) {
            return item_data.image_url.indexOf(temp_url) >= 0;
          });
          if (exists_items.length > 0){
            exists_items.forEach((item_exists, index) => {
              this[item_exists.count_param] = item.menu
            });

          }
        });
      }
    });
  }



}


