import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the SilabaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-silaba',
  templateUrl: 'silaba.html',
})
export class SilabaPage {

	syllable: string = "";
	letters: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SilabaPage');
  }

  describe() {

  	this.tts.speak('Hello World')
  		.then(() => console.log('Success'))
  		.catch((reason: any) => console.log(reason));

  	this.letters = this.syllable.split('');
  	console.log(this.letters);
  }
  readLetter(letter) {
  	this.tts.speak(letter)
  		.then(() => console.log('Success'))
  		.catch((reason: any) => console.log(reason));
  }
}
