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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonhttpProvider } from '../../providers/commonhttp/commonhttp';
/**
 * Generated class for the DefaultlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DefaultlistPage = (function () {
    function DefaultlistPage(navCtrl, navParams, commonhttpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonhttpProvider = commonhttpProvider;
        this.defaultListConfig = [];
    }
    DefaultlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.commonhttpProvider.getJsonFile("assets/config/defaultList.json")
            .subscribe(function (data) {
            _this.defaultListConfig = data;
        });
        this.commonhttpProvider.postServeData("../api/DefaultList", { category: "testCommonList" })
            .subscribe(function (data) {
            console.log(data);
        });
        console.log('ionViewDidLoad DefaultlistPage');
    };
    return DefaultlistPage;
}());
DefaultlistPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-defaultlist',
        templateUrl: 'defaultlist.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, CommonhttpProvider])
], DefaultlistPage);
export { DefaultlistPage };
//# sourceMappingURL=defaultlist.js.map