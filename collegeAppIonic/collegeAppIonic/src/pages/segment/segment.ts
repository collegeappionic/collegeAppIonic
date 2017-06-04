import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonhttpProvider } from '../../providers/commonhttp/commonhttp';
import * as _ from 'lodash';

/**
 * Generated class for the SegmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-segment',
    templateUrl: 'segment.html',
})
export class SegmentPage {
    myname = "";
    tabs = [];
    nowTab = {};
    constructor(public navCtrl: NavController, public navParams: NavParams, private commonhttpProvider: CommonhttpProvider) {
    }
    concats = [];
    alertNowTab() {
        alert(this.nowTab);
    }
    getNowTab() {

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SegmentPage');
        this.commonhttpProvider.getStudent()
            .subscribe(resData =>
                console.log(resData)
            );

        this.commonhttpProvider.getTabs()
            .subscribe(resData => this.tabs = resData);
        
    }
    getStudent() {
        this.commonhttpProvider.getStudent()
            .subscribe(resData =>
                console.log(resData)
            );

        this.commonhttpProvider.getTabs()
            .subscribe(resData => this.tabs = resData)
    }
}
