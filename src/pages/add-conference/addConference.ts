import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {MainService} from "../../services/MainService";

@Component({
  selector: 'page-add-conf',
  templateUrl: 'addConference.html'
})
export class AddConference {
  conference: {};
  constructor(public navCtrl: NavController, public MainService: MainService, public toaster: ToastController ) {
    this.conference = {
      name : '',
      description : '',
      venue : '',
      eventdate : '',
      category : '',
      judge : ''
    }
  }

  addConference(){

    let post_data = {
      data : this.conference
    };
    this.MainService.addConference(post_data).subscribe(data => {
      this.toaster.create({
        message: 'Successfully added conference',
        duration: 3000,
        position: 'bottom'
      }).present();
      this.conference= {
        name : '',
        description : '',
        venue : '',
        eventdate : '',
        category : '',
        judge : ''
      }
    }, err => {
      this.toaster.create({
        message: err.message,
        duration: 3000,
        position: 'bottom'
      }).present()
    })
  }
}

