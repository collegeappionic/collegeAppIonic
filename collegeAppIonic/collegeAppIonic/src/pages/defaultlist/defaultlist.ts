import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonhttpProvider } from '../../providers/commonhttp/commonhttp';
import * as _ from 'lodash';

/**
 * Generated class for the DefaultlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-defaultlist',
  templateUrl: 'defaultlist.html',
})
export class DefaultlistPage {
    defaultListConfig = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, private commonhttpProvider: CommonhttpProvider) {

  }

    ionViewDidLoad() {
        this.commonhttpProvider.getJsonFile("assets/config/defaultList.json")
            .subscribe(data => {
                this.defaultListConfig = data;
            })
        this.commonhttpProvider.postServeData("../api/DefaultList", { category: "testCommonList" })
            .subscribe(data => {
                console.log(data);
            })
    console.log('ionViewDidLoad DefaultlistPage');
  }

}
