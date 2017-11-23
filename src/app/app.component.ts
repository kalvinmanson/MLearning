import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DatosPage } from '../pages/datos/datos';
import { SilabaPage } from '../pages/silaba/silaba';
import { FacebookPage } from '../pages/facebook/facebook';
import { TablasPage } from '../pages/tablas/tablas';
import { AsistenciaPage } from '../pages/asistencia/asistencia';
import { AgendaPage } from '../pages/agenda/agenda';
import { JuegoPage } from '../pages/juego/juego';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Datos', component: DatosPage },
      { title: 'Silaba', component: SilabaPage },
      { title: 'Facebook', component: FacebookPage },
      { title: 'Tablas', component: TablasPage },
      { title: 'Asistencia', component: AsistenciaPage },
      { title: 'Agenda', component: AgendaPage },
      { title: 'Juego', component: JuegoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
