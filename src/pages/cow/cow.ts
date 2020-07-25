import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-cow',
  templateUrl: 'cow.html'
})
export class CowPage {
  modalDismissData: any;
  selectionDismissData:any;
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
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage,) {
    this.menu1 =  0;

    this.menu2 =  0;
    this.menu3 =  0;
    this.menu4 =  0;
    this.menu5 =  0;
    this.menu6 =  0;
    this.menu7 =  0;
    this.menu8 =  0;


    this.price1 = "50.000"
    this.price2 = "60.000"
    this.price3 = "70.000"
    this.price4 = "80.000"
    this.price5 = "90.000"
    this.price6 = "100.000"
    this.price7 = "110.000"


    this.total = "0"
    this.storage.get('current_total').then((val) => {
      console.log('current_total is', val);
      if (val !=null){
        this.total = parseInt(val)
      }
    });
  }

  
  increaseValue(event:string, name_value?:string, price?:string){   
    this[name_value]++
    this.total = parseInt(this.total) +  parseInt(price.replace('.',''))
    let data = this.buildObjectData()
    this.storage.set('current_data', data);
   }
 
   decreaseValue(event:string, name_value?:string, price?:string){
    if (this[name_value] > 0) {
       this[name_value]--
       this.total = parseInt(this.total) -  parseInt(price.replace('.',''))
       let data = this.buildObjectData()
       this.storage.set('current_data', data);
    }
  }

  buildObjectData(){
    let obj1 = {
      menu : this.menu1,
      price: this.price1,
      name: "Trâu luộc",
      image_url:"assets/img/trau_luoc_la.jpg",
      count_param : "menu1"
     }
     let obj2 = {
      menu : this.menu2,
      price: this.price2,
      name: "Bò xào",
      image_url:"assets/img/bo_xao_can.jpg",
      count_param : "menu2"
     }
 
     let data = []
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

  calculateTotal(){
    this.storage.get('current_total').then((val) => {
      console.log('current_total is', val);
      if (val != null) {
        this.total = parseInt(val)
      }else{
        this.total = 0
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
          if (exists_items){
            exists_items.map(o => {
              return o;
            }).forEach(item => result_return.push(item));
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
      if (val != null) {
        val.forEach((item, index) => {
          let temp_url = item.image_url
          let exists_items = data.filter(function(item_data) {
            return item_data.image_url.indexOf(temp_url) >= 0;
          });
          if (exists_items){
            exists_items.forEach((item_exists, index) => {
              this[item_exists.count_param] = item.menu
            });

          }
        });
      }
    });
  }
}
