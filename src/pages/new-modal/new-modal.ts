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
  current_data: Array<any>;
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
    console.log('data', navParams.get('data'));
    this.data = navParams.get('data');
    this.current_data = []

    this.storage.get('current_data').then((val) => {
      console.log('current_data is', val);

      if (val != null) {
        this.current_data = val
        // for (let key in val) {
        //   let menu_text = "menu" + String(parseInt(key) + 1)
        //   let price_text = "price" + String(parseInt(key) + 1)
  
        //   this[menu_text] = val[key].menu
        //   this[price_text] = val[key].price
        // }
      }
      // this.storage.set('current_data', this.data);
    });
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewModalPage');
  }
 
  dismissModal() {
    // let data = { 'foo': 'bar' };
    let data = {  };
    this.viewCtrl.dismiss(data);
  }

  backPage() {
  	this.navCtrl.popToRoot();
  }

  clearStorage(){
    this.storage.clear();
    this.dismissModal()
  }
 
}
 