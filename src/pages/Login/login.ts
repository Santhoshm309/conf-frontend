import { Component } from '@angular/core';
import {App, Nav, NavController, ToastController} from 'ionic-angular';
import {UserPage} from "../user/user";
import {AdminPage} from "../admin/admin";
import {MainService} from "../../services/MainService";
import {Storage} from "@ionic/storage";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  userPage = UserPage;
  adminPage = AdminPage;
  email : any;
  password: any;

  constructor(public navCtrl: NavController, private MainService: MainService, public toastCtrl :ToastController, public app :App, public storage: Storage) {

  }

  login () {
    let post_data = {
      data: {
        email : this.email,
        password: this.password
      }
    };
    this.MainService.login(post_data).subscribe(data => {
      console.log(data);
      this.storage.set('uid', data.data.uid);
      if (data.data.role=='user'){
        this.app.getRootNav().push(UserPage);
      }else if (data.data.role == 'admin'){
        this.app.getRootNav().push(AdminPage);
      }
    }, err => {
          this.toastCtrl.create({
            message: err.message,
            duration : 3000,
            position : 'bottom'
          }).present();
    });

    console.log(post_data);
  }
  getSearch(){
    this.MainService.getSearch().subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }
}
