import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-utama',
  templateUrl: './utama.page.html',
  styleUrls: ['./utama.page.scss'],
})
export class UtamaPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public storageService: StorageService
  ) { }


  ngOnInit() {
    console.log('Utama ngOnInit');
    console.log(this.storageService.get('token'));
  }

  ionViewWillEnter(){
    console.log('Utama view will enter');
  }

  ionViewDidEnter(){
    console.log('Utama view did enter');
  }

  ionViewWillLeave(){
    console.log('Utama view will leave');
  }

  ionViewDidLeave(){
    console.log('Utama view did leave');
  }

  scanGuru() {
    this.navCtrl.navigateRoot('/login');
  }

}
