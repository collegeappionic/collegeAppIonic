import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    }
    danxuan(type)
    {
        let alert = this.alertCtrl.create({
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
        }
        );
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
            handler: data => {
            }
        });
        alert.present();
    }
    proAlert()
    {
        let alert = this.alertCtrl.create({
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
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        alert.present();
    }
  simAlert()
  {
      let alert = this.alertCtrl.create({
          title: '这里是标题!',
          subTitle: 'IONIC IONIC IONC ANGULAR 测试测试!',
          buttons: [
              {
                  text: '取消',
                  handler: () => {
                      console.log('Disagree clicked');
                  }
              },
              {
                  text: '确定',
                  handler: () => {
                      console.log('Agree clicked');
                  }
              }
          ]
      });
      alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

}
