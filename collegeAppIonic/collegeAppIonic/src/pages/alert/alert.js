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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the AlertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AlertPage = (function () {
    function AlertPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AlertPage.prototype.danxuan = function (type) {
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    type: type,
                    label: 'Blue',
                    value: 'blue',
                    checked: true
                },
                {
                    type: type,
                    label: 'Red',
                    value: 'Red',
                },
                {
                    type: type,
                    label: '蓝色',
                    value: '蓝色',
                }
            ]
        });
        alert.setTitle('请选择颜色');
        //alert.addInput({
        //    type: 'radio',
        //    label: 'Blue',
        //    value: 'blue',
        //    checked: true
        //});
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
            }
        });
        alert.present();
    };
    AlertPage.prototype.proAlert = function () {
        var alert = this.alertCtrl.create({
            title: '这里是标题!',
            subTitle: 'IONIC IONIC IONC ANGULAR 测试测试!',
            inputs: [
                {
                    name: '标题',
                    placeholder: '请输入'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AlertPage.prototype.simAlert = function () {
        var alert = this.alertCtrl.create({
            title: '这里是标题!',
            subTitle: 'IONIC IONIC IONC ANGULAR 测试测试!',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertPage');
    };
    return AlertPage;
}());
AlertPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-alert',
        templateUrl: 'alert.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], AlertPage);
export { AlertPage };
//# sourceMappingURL=alert.js.map