import { Component } from '@angular/core';
import {NavController, Tabs, ToastController} from 'ionic-angular';
import {MainService} from "../../services/MainService";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  email :any;
  name: any;
  password : any;
  cpassword: any;
  constructor(public navCtrl: NavController, public mainService: MainService, public toast: ToastController) {

  }

  signup() {
    if (this.password == this.cpassword){
      let post_data = {
        data: {
          name : this.name,
          email : this.email,
          password: this.password
        }
      };

      this.mainService.signup(post_data).subscribe(data => {

        this.toast.create({
          message: 'Succesfully signed up',
          duration : 3000,
          position : 'bottom'
        }).present();
        var t: Tabs = this.navCtrl.parent;
        t.select(0);
      }, err=> {
        if (err.code == 1062){
          err.message = 'Already a member'
        }
        this.toast.create({
          message: err.message,
          duration : 3000,
          position : 'bottom'
        }).present();
      })
    }else {
      this.toast.create({
        message: 'Passwords Do not match',
        duration : 3000,
        position : 'bottom'
      }).present();
    }
  }


}
