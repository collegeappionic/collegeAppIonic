import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionsheetPage } from '../actionsheet/actionsheet';
import { DatepickPage } from '../datepick/datepick';
import { AlertPage } from '../alert/alert';
import { InputsPage } from '../inputs/inputs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    items = [];
    constructor(public navCtrl: NavController) {
        let starttime = new Date();
        this.items = [
            {
                name: "actionSheet",
                com:ActionsheetPage
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
            }
        ];
    }
    itemSelected(item)
    {
        this.navCtrl.push(item.com);
    }
}
