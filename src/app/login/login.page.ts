import { UtamaPage } from './../utama/utama.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log('Login ngOnInit');
  }

  ionViewWillEnter(){
    console.log('Login view will enter');
  }

  ionViewDidEnter(){
    console.log('Login view did enter');
  }

  ionViewWillLeave(){
    console.log('Login view will leave');
  }

  ionViewDidLeave(){
    console.log('Login view did leave');
  }

  login() {
    this.navCtrl.navigateRoot('/utama');
  }

}
