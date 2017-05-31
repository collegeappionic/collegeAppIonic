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
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
/**
 * Generated class for the InputsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InputsPage = (function () {
    function InputsPage(navCtrl, popoverCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
    }
    InputsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputsPage');
    };
    InputsPage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(PopoverPage);
        popover.present();
    };
    return InputsPage;
}());
InputsPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-inputs',
        templateUrl: 'inputs.html',
    }),
    __metadata("design:paramtypes", [NavController, PopoverController, NavParams])
], InputsPage);
export { InputsPage };
//# sourceMappingURL=inputs.js.map