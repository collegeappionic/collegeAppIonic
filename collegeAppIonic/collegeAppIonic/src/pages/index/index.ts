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
    public datameSource1 = [];
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
        this.getMenus().subscribe(
            Data => {
                this.resData = Data;
                var datameSource = [];
                var pages = (Data.length % 6);
                console.log(this.resData);
                
                if ((Data.length % 6) > 0) {
                    var pages = Math.floor(Data.length / 6)+1;
                    //console.log(pages);
                }else {
                    var pages = Math.floor(Data.length / 6)
                    //console.log(pages);
                }
                for (var i = 0; i < pages; i++) {
                    //初始化datapage数据格式
                    var dataPage = {
                        "index": i,
                        "data" : [
                            {
                                "data": []
                            },
                            {
                                "data": []
                            }
                        ]
                    };
                    datameSource.push(dataPage);
                }
                //console.log(dataPage)
                var pageIndex: number = 0;
                var rowIndex: number = 0;
                var dataRowIndex: number = 0;
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
                    datameSource[pageIndex].data[rowIndex].data[dataRowIndex] = m;
                    dataRowIndex++;
                });
                //这里接受无法接收的this.datameSource再次定义一个datameSource1传动到前面的页面中去
                this.datameSource1 = datameSource;
                console.log(this.datameSource1.length);
            }
        );
    }
}
