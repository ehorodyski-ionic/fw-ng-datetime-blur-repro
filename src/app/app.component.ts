import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public someDates = ["2016-01-01", "2017-01-01", "2018-01-01"]
  public someDate = this.someDates[0];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onIonChange($event: CustomEvent) {
    console.log("onChange triggered")
  }

  onIonBlur($event: CustomEvent) {
    console.log("onBlur triggered")
  }

  onIonCancel($event: CustomEvent) {
    console.log("onCancel triggered")
  }

  changeDate() {
    this.someDate = this.someDates[(this.someDates.indexOf(this.someDate) + 1) % 3];

  }
}
