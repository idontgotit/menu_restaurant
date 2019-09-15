import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the SelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage {

  data: any;
  selectionData:any;
 
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log('UserId', navParams.get('data'));
    this.data = navParams.get('data');
    
    this.selectionData = []
	for(let key in this.data.image){

		let image_name = "assets/img/" + this.data.image[key] + ".jpg"
	    let obj_data = {
	    	name:this.data.name[key],
	    	image: image_name,
	    	origin_name: this.data.image[key]
	    }

	    this.selectionData.push(obj_data)
	}
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewModalPage');
  }
 
  dismissModal() {
    this.viewCtrl.dismiss();
  }

 selectObject(selected_item:any) {
    let data = { 'selected_item': selected_item };
    this.viewCtrl.dismiss(data);
  }
 
}
