import { Component } from '@angular/core';
import {App, ModalController, NavController, PopoverController, ToastController} from 'ionic-angular';
import {MainService} from "../../services/MainService";
import {DetailsPage} from "../conference_details/details";
import {AddConference} from "../add-conference/addConference";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage"

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  conferenceList: any[];
  constructor(public navCtrl: NavController,public storage: Storage, public app: App, public MainService: MainService, public toasterCtrl: ToastController,public modal: ModalController, public pop: PopoverController) {
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
  openPop(){
      let pop = this.pop.create(AddConference, {}, {cssClass: 'popover-enlarged'});
      pop.onDidDismiss((data) => {
        this.fetchData();
      });
      pop.present();
  }

  logout(){
    this.toasterCtrl.create({
      message: 'Logout Successful',
      duration : 3000,
      position:'bottom'
    }).present();
    this.storage.clear();
    this.app.getRootNav().push(HomePage);
  }



}
