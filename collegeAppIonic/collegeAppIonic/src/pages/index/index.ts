import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import * as _ from 'lodash';
/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
    clickMessage: string;
    resData: {};
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        
    }
    
    
    

    getMenus(): Observable<any[]> {
        return this.http.get('assets/config/menu.json')
            .map(this.extractData);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    
    ionViewDidLoad() {
        //console.log('ionViewDidLoad IndexPage');
        
        this.getMenus().subscribe(
            Data => {
                this.resData = Data;
                var datameSource: any[];
                var pages = (Data.length % 6);
                //console.log(Data);
                
                if ((Data.length % 6) > 0) {
                    var pages = Math.ceil(Data.length / 6);
                    console.log(pages);
                }else {
                    var pages = Math.ceil(Data.length / 6)
                    console.log(pages);
                }
                //for (var i = 0; i < pages; i++) {
                //    //初始化datapage数据格式
                //    var dataPage = {
                //        "index": i,
                //        "data" : [
                //            {
                //                "data": []
                //            },
                //            {
                //                "data": []
                //            }
                //        ]
                //    };
                //    console.log(dataPage);
                //    datameSource.push(dataPage);
                //}
                console.log(datameSource)
            }
       
            //console.log(Data)
            
        );
    }

}
