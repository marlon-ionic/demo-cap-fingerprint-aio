import { Component } from '@angular/core';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private faio: FingerprintAIO) {}



  async check() {
    console.log('check');
    try {
      const isAvailable =  await this.faio.isAvailable();
      console.log(isAvailable);
    } catch (error) {
      console.log('(check) error', error);
    }
  }

  async show() {
    console.log('show');
    try {
      await this.faio.show({
        title: 'Please authenticate'
      });
    } catch(error) {
      console.log('(show) error', error);
    }
  }
}
