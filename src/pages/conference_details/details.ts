import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {MainService} from "../../services/MainService";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage{

   details;
  constructor(public navCtrl: NavController, public params : NavParams, public viewCtrl: ViewController, public mainService: MainService, public toast: ToastController) {
    this.details = this.params.get('data');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }


}
