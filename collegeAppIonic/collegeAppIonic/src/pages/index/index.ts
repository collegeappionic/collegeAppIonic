import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
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
        this.getMenus().subscribe(//Data =>this.resData = Data[0].title
            //console.log(Data)
            function (Data) {
                this.resData = Data
            }
        );
        this.clickMessage = 'You are my hero!';
    }

}
