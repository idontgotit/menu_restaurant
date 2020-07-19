//new-modal.ts
 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the NewModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-new-modal',
  templateUrl: 'new-modal.html',
})
export class NewModalPage {
 
  data: any;
 
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

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
  ) {
    console.log('UserId', navParams.get('data'));
    this.data = navParams.get('data');

    this.storage.get('current_data').then((val) => {
      console.log('current_data is', val);

      if (val != null) {
        for (let key in val) {
          let menu_text = "menu" + String(parseInt(key) + 1)
          let price_text = "price" + String(parseInt(key) + 1)
  
          if (key == "6") {
            let select_item = val[key]
            this[menu_text] = select_item.select_object[0]
  
            this["menu8"] = select_item.select_object[1]
          } else {
            this[menu_text] = val[key].menu
          }
          // this[menu_text] = val[key].menu
          this[price_text] = val[key].price
        }
      }
      // for (let key in this.data) {
      //   let menu_text = "menu" + String(parseInt(key) + 1)
      //   let price_text = "price" + String(parseInt(key) + 1)

      //   if (key == "6") {
      //     let select_item = this.data[key]
      //     this[menu_text] = select_item.select_object[0]

      //     this["menu8"] = select_item.select_object[1]
      //   } else {
      //     this[menu_text] = this.data[key].menu
      //   }

      //   this[price_text] = this.data[key].price
      // }
      this.storage.set('current_data', this.data);
    });
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewModalPage');
  }
 
  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  backPage() {
  	this.navCtrl.popToRoot();
  }
 
}
 