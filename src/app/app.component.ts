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

  public someDates = ["2012-01-01", "2013-01-01", "2014-01-01"]
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

  onChange($event: CustomEvent) {
    console.log("onChange triggered")
  }

  onBlur($event: CustomEvent) {
    console.log("onBlur triggered")
  }

  onCancel($event: CustomEvent) {
    console.log("onCancel triggered")
  }

  changeDate() {
    this.someDate = this.someDates[(this.someDates.indexOf(this.someDate) + 1) % 3];

  }
}
