import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/Login/login";
import {SignupPage} from "../pages/signup/signup";
import {UserPage} from "../pages/user/user";
import {AdminPage} from "../pages/admin/admin";
import {MainService} from "../services/MainService";
import {Http, HttpModule} from "@angular/http";
import {DetailsPage} from "../pages/conference_details/details";
import {AddConference} from "../pages/add-conference/addConference";
import {AllConferences} from "../pages/user/all-conferences/all-conferences";
import {SubConferences} from "../pages/user/sub-conferences/sub-conferences";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UserPage,
    AdminPage,
    DetailsPage,
    AddConference,
    AllConferences,
    SubConferences
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UserPage,
    AdminPage,
    DetailsPage,
    AddConference,
    AllConferences,
    SubConferences
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MainService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
