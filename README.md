# Simple Demo - Fingerprint AIO Plugin with Capacitor

## Initial Step

These steps were performed to create this simple project:

* `ionic start demo-cap-fingerprint-aio --type angular`
* `npm i cordova-plugin-fingerprint-aio`
* `npm i @awesome-cordova-plugins/fingerprint-aio`

Update `src/app/app.module.ts` to import the `FingerprintAIO`

```typescript
...
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FingerprintAIO],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Replace `src/app/home/home.page.ts` with the following:

```typescript
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
```

Replace `src/home/home.page.html` with the following:

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Home
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Home</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-button (click)="check()">
    Check
  </ion-button>

  <ion-button (click)="show()">
    Show
  </ion-button>
</ion-content>

```

* `ionic build`
* `ionic cap add ios`
* Edit `ios/App/App/Info.plist`:
  
  ```xml
  <key>NSFaceIDUsageDescription</key>
  <string>Enter your Face ID usage description!</string>
  ```

* `ionic cap open ios`
* Set your Development Team in `Signing & Capabilities`
* You can then run the app via Xcode or going back to your project and run `ionic cap run ios`

## Usage

* Open your projectin Xcode, and be sure to set your Development Team in `Signing & Capabilities`
* You can then run the app via Xcode or going back to your project and run `ionic cap run ios`
