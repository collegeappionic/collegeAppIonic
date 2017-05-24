import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

/**
 * Generated class for the ActionsheetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {

    constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public actionSheet: ActionSheetController) {
  }
    openAction() {
        let act = this.actionSheet.create({
            title: '操作',
            buttons: [
                {
                    text: '打电话',
                    role: 'destructive',
                    icon:'call',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: '发短信',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }, {
                    text: '发邮件',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        act.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsheetPage');
  }

}
