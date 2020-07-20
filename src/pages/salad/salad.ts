import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewModalPage } from '../new-modal/new-modal';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-salad',
  templateUrl: 'salad.html'
})
export class SaladPage {
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
   }
 
   decreaseValue(event:string, name_value?:string, price?:string){
    if (this[name_value] > 0) {
       this[name_value]--
       this.total = parseInt(this.total) -  parseInt(price.replace('.',''))
    }
  }

  openModal() {

    
    let obj1 = {
      menu : this.menu1,
      price: this.price1,
      name: "salad_cu_cai"
     }
     let obj2 = {
      menu : this.menu2,
      price: this.price2,
      name: "salad_dua_chuot"
     }


     let data = []
     data.push(obj1)
     data.push(obj2)

    const profileModal = this.modalCtrl.create(NewModalPage, { data: data },);
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.modalDismissData = JSON.stringify(data);
    });

    profileModal.present();
  }
  
}
