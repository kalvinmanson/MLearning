import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AsistenciaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {
	day: String = new Date().toISOString();
	students: String[] = [];
	name: String = "";
	asists: String[] = [];
	student: String = "";

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
  	private storage: Storage) {

  	//this.storage.clear();

  	this.storage.get('asists').then((val) => {
	    if(val) {
	    	this.asists = val;
	    }
	});
	this.storage.get('students').then((val) => {
	    if(val) {
	    	this.students = val;
	    }
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }

  confirmStudent(student) {
  	let newDay = new Date('' + this.day + '');
  	let OnewDay = newDay.getFullYear() + '/'+newDay.getMonth()+'/'+newDay.getDate();
  	let asist = student + OnewDay;
  	this.asists.push(asist);
  	this.storage.set('asists', this.asists);
  }
  addStudent() {
  	if(this.name.length > 0) {
  		this.students.push(this.name);
  		this.storage.set('students', this.students);
  		this.name = "";

  	} else {
  		let alert = this.alertCtrl.create({
	      title: 'Error',
	      subTitle: 'El campo nombre es obligatorio',
	      buttons: ['OK']
	    });
	    alert.present();
  	}
  	
  }
  isAsist(student) {
  	let newDay = new Date('' + this.day + '');
  	let OnewDay = newDay.getFullYear() + '/'+newDay.getMonth()+'/'+newDay.getDate();
  	if(this.asists.indexOf('' + student + OnewDay + '') >= 0) {
  		return true;
  	} else {
  		return false;
  	}
  }

}
