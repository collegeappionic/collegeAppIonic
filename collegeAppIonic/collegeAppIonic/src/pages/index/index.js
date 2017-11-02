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
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import * as _ from 'lodash';
/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IndexPage = (function () {
    function IndexPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.datameSource = [];
    }
    IndexPage.prototype.getMenus = function () {
        return this.http.get('assets/config/menu.json')
            .map(this.extractData);
    };
    IndexPage.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    IndexPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad IndexPage');
        var _this = this;
        this.getMenus().subscribe(function (Data) {
            _this.resData = Data;
            var pages = (Data.length % 6);
            console.log(_this.resData);
            if ((Data.length % 6) > 0) {
                var pages = Math.floor(Data.length / 6) + 1;
            }
            else {
                var pages = Math.floor(Data.length / 6);
            }
            for (var i = 0; i < pages; i++) {
                //初始化datapage数据格式
                var dataPage = {
                    "index": i,
                    "data": [
                        {
                            "data": []
                        },
                        {
                            "data": []
                        }
                    ]
                };
                _this.datameSource.push(dataPage);
            }
            console.log(_this.datameSource);
            //console.log(dataPage)
            var pageIndex = 0;
            var rowIndex = 0;
            var dataRowIndex = 0;
            _.forEach(Data, function (m, key) {
                if (pageIndex != Math.floor(key / 6)) {
                    pageIndex = Math.floor(key / 6);
                    rowIndex = 0;
                    dataRowIndex = 0;
                }
                if (rowIndex > 1) {
                    rowIndex = 0;
                }
                if (dataRowIndex > 2) {
                    dataRowIndex = 0;
                    rowIndex++;
                }
                //无法接收this.datameSource
                this.datameSource[pageIndex].data[rowIndex].data[dataRowIndex] = m;
                dataRowIndex++;
            });
            console.log(_this.datameSource);
        });
    };
    return IndexPage;
}());
IndexPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-index',
        templateUrl: 'index.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Http])
], IndexPage);
export { IndexPage };
//# sourceMappingURL=index.js.map