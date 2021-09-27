import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utama',
  templateUrl: './utama.page.html',
  styleUrls: ['./utama.page.scss'],
})
export class UtamaPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }


  ngOnInit() {
    console.log('Utama ngOnInit');
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
