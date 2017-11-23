import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AgendaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

	day: String = new Date().toISOString();
	name: String = "";
	course: String = "";
	description: String = "";
	events: any = [];
	eventsDay: any = [];



  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
  	private storage: Storage) {

  	this.storage.get('events').then((val) => {
	    if(val) {
	    	this.events = val;
	    	this.changeDay(this.day);
	    }
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }
  addEvent() {
  	let newDay = new Date('' + this.day + '');
  	let OnewDay = newDay.getFullYear() + '/'+newDay.getMonth()+'/'+newDay.getDate();

  	this.events.push({
  		name: this.name,
  		course: this.course,
  		description: this.description,
  		day: this.day,
  		oday: OnewDay});

  	this.storage.set('events', this.events);

  	this.name = "";
  	this.course = "";
  	this.description = "";

  	var eventsByDay = this.filterByProperty(this.events, "oday", OnewDay);
  	this.eventsDay = eventsByDay;

  }

  filterByProperty(array, prop, value){
    var filtered = [];
    for(var i = 0; i < array.length; i++){
        var obj = array[i];
        if(obj[prop] == value){
            filtered.push(obj);
        }
    }
   return filtered;
  }

  changeDay(event) {
  	let newDay = new Date('' + event + '');
  	let OnewDay = newDay.getFullYear() + '/'+newDay.getMonth()+'/'+newDay.getDate();

  	var eventsByDay = this.filterByProperty(this.events, "oday", OnewDay);
  	this.eventsDay = eventsByDay;
  }


}
