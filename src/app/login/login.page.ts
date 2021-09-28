import { UtamaPage } from './../utama/utama.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {
    txtKp: '',
    txtPass: ''
  };

  constructor(
    public authService: AuthService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log('Login ngOnInit');
  }

  validateInputs() {
    const txtKp = this.postData.txtKp.trim();
    const txtPass = this.postData.txtPass.trim();

    return (this.postData.txtKp && this.postData.txtPass && txtKp.length > 0 && txtPass.length > 0);
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
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res: any) => {
        console.log(res);
      });
      // this.navCtrl.navigateRoot('/utama');
    } else {
      console.log('error');
    }
  }

}
