import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {
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


  constructor(public navCtrl: NavController) {
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
  
}
