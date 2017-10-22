import { Component } from '@angular/core';
import {ModalController, NavController, PopoverController, ToastController} from 'ionic-angular';
import {MainService} from "../../../services/MainService";
import {DetailsPage} from "../../conference_details/details";
import {Storage} from "@ionic/storage"

@Component({
  selector: 'page-all-conf',
  templateUrl: 'all-conferences.html',
})
export class AllConferences {

  conferenceList: any[];
  constructor(public navCtrl: NavController,public storage: Storage ,public MainService: MainService, public toasterCtrl: ToastController,public modal: ModalController, public pop: PopoverController) {
    this.fetchData();
  }

  fetchData(){
    this.MainService.getConferenceList().subscribe(data => {
      this.conferenceList = data.data;
      console.log(this.conferenceList);
    }, err => {
      this.toasterCtrl.create({
        message: err.message,
        duration : 2000,
        position: 'bottom'
      }).present()
    })
  }

  itemSelected(item_id){
    this.MainService.getConferenceDetails(item_id).subscribe(data => {
      var open = this.modal.create(DetailsPage, {data: data.data});
      open.present();
    }, err => {
      this.toasterCtrl.create({
        message: err.message,
        duration : 3000,
        position:'bottom'
      })
    })
  }

  subscribeConf(conf_id) {
    this.storage.get('uid').then(val => {
      let post_data ={
        data : {
          conf_id : conf_id,
          user_id : val
        }
      };
     this.MainService.conf_subscribe(post_data).subscribe(data => {
       this.toasterCtrl.create({
         message: 'Successfully Subscribed',
         duration : 3000,
         position:'bottom'
       }).present();
     }, err=> {
       if (err.code == 1062){
         err.message = 'Already Subscribed'
       }
       this.toasterCtrl.create({
         message: err.message,
         duration : 3000,
         position:'bottom'
       }).present();
     })
    })
  }
}
