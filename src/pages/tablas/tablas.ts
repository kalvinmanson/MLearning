import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TablasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tablas',
  templateUrl: 'tablas.html',
})
export class TablasPage {

	numero: number = 0;
	operation: string  = "";
	result: number = 0;
	tabla: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablasPage');
  }

  calcule() {
	//calcular
	if(this.operation == "sum") {
		this.result = 1;
		for (let i=2;i<=this.numero;i++){
		 this.result += i;
		}
	}
	if(this.operation == "fac") {
		this.result = 1;
		for (let i=2;i<=this.numero;i++){
		 this.result *= i;
		}
	}
	//mostar tabla
	for (let i=1;i<=10;i++){
	 this.tabla.push("" + this.numero +"x"+i+"="+(this.numero * i));
	}


	console.log(this.result);

  	let alert = this.alertCtrl.create({
      title: this.operation + ' de ' + this.numero + ':',
      subTitle: 'El resultado es: ' + this.result,
      buttons: ['OK']
    });
    alert.present();
  }

}
