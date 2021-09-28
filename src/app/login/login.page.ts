import { StorageService } from './../storage.service';
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
    txtKp: '840806065308',
    txtPass: 'ionic@123456789'
  };

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public storageService: StorageService
  ) { }

  ngOnInit() {
    console.log('Login ngOnInit');
  }

  validateInputs() {
    const txtKp = this.postData.txtKp.trim();
    const txtPass = this.postData.txtPass.trim();

    return (this.postData.txtKp && this.postData.txtPass && txtKp.length > 0 && txtPass.length > 0);
  }

  login() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res: any) => {
        if (res.status === 'Berjaya') {
          console.log(res.token);
          this.storageService.store('token', res.token);
          this.navCtrl.navigateRoot('/utama');
        } else {
          alert('ID/Kata Laluan salah. Sila masukkan ID/Kata Laluan yang betul.');
        }
      });
      // this.navCtrl.navigateRoot('/utama');
    } else {
      console.log('error');
    }
  }

}
