import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatosPage } from '../pages/datos/datos';
import { SilabaPage } from '../pages/silaba/silaba';
import { FacebookPage } from '../pages/facebook/facebook';
import { TablasPage } from '../pages/tablas/tablas';
import { AsistenciaPage } from '../pages/asistencia/asistencia';
import { AgendaPage } from '../pages/agenda/agenda';
import { JuegoPage } from '../pages/juego/juego';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TextToSpeech } from '@ionic-native/text-to-speech';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatosPage,
    SilabaPage,
    FacebookPage,
    TablasPage,
    AsistenciaPage,
    AgendaPage,
    JuegoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatosPage,
    SilabaPage,
    FacebookPage,
    TablasPage,
    AsistenciaPage,
    AgendaPage,
    JuegoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
