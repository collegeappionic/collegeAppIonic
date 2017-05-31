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
import { NavController } from 'ionic-angular';
import { ActionsheetPage } from '../actionsheet/actionsheet';
import { DatepickPage } from '../datepick/datepick';
import { AlertPage } from '../alert/alert';
import { InputsPage } from '../inputs/inputs';
import { DefaultlistPage } from '../defaultlist/defaultlist';
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        var starttime = new Date();
        this.items = [
            {
                name: "actionSheet",
                com: ActionsheetPage
            },
            {
                name: "日期控件",
                com: DatepickPage
            },
            {
                name: "各种提示",
                com: AlertPage
            },
            {
                name: "输入",
                com: InputsPage
            },
            {
                name: "通用列表",
                com: DefaultlistPage
            },
            {
                name: "页内TAB",
                com: "SegmentPage"
            }
        ];
    }
    HomePage.prototype.itemSelected = function (item) {
        this.navCtrl.push(item.com);
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map