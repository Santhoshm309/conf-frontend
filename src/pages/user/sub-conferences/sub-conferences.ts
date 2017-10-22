import { Component } from '@angular/core';
import {ModalController, NavController, ToastController} from 'ionic-angular';
import {MainService} from "../../../services/MainService";
import {DetailsPage} from "../../conference_details/details";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-sub-conf',
  templateUrl: 'sub-conferences.html'
})
export class SubConferences {
  conferenceList: any[];
  uid : any;
  constructor(public navCtrl: NavController, public MainService: MainService, public storage: Storage,public toasterCtrl: ToastController, public modal: ModalController) {
  }

  ionViewDidEnter(){
    this.fetchData();
  }
  fetchData(){
    this.storage.get('uid').then((val)=> {
      this.uid = val;
      this.MainService.getSubList(this.uid).subscribe(data => {
        this.conferenceList = data.data;
        console.log(this.conferenceList);
      }, err => {
        this.toasterCtrl.create({
          message: err.message,
          duration : 2000,
          position: 'bottom'
        }).present()
      })
    });

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
}
