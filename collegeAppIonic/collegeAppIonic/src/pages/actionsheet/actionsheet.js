var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
/**
 * Generated class for the ActionsheetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ActionsheetPage = (function () {
    function ActionsheetPage(platform, navCtrl, navParams, actionSheet) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheet = actionSheet;
    }
    ActionsheetPage.prototype.alertME = function () {
    };
    ActionsheetPage.prototype.openAction = function () {
        var act = this.actionSheet.create({
            title: '操作',
            buttons: [
                {
                    text: '打电话',
                    role: 'destructive',
                    icon: 'call',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: '发短信',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: '发邮件',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        act.present();
    };
    ActionsheetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActionsheetPage');
    };
    return ActionsheetPage;
}());
ActionsheetPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-actionsheet',
        templateUrl: 'actionsheet.html',
    }),
    __metadata("design:paramtypes", [Platform, NavController, NavParams, ActionSheetController])
], ActionsheetPage);
export { ActionsheetPage };
//# sourceMappingURL=actionsheet.js.map