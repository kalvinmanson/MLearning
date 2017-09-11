import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DatosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {

	cedula: string = "";
	ciudad: string = "";
	apellidos: string = "";
	nombres: string = "";
	eps: string = "";
	celular: string = "";
	

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }

  showdata() {
  	console.log("hola mundo");
  	let alert = this.alertCtrl.create({
      title: 'Hi, ' + this.nombres + " " + this.apellidos,
      subTitle: 'You are in <span class="c0">'+this.ciudad+'</span>, Your document is <span class="c1">'+this.cedula+'</span>, your celphone is <span class="c2">'+this.celular+'</span>, and your EPS is <span class="c3">'+this.eps+'</span>',
      buttons: ['OK']
    });
    alert.present();
  	
  }

}
