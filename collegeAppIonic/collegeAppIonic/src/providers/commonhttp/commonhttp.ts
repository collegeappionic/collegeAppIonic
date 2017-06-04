import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the CommonhttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommonhttpProvider {

    constructor(public http: Http) {
        console.log('Hello CommonhttpProvider Provider');
    }
    getStudent(): Observable<any[]> {
        return this.http.get('../api/student')
            .map(this.extractData);
    }
    getJsonFile(path: string): Observable<any[]> {
        return this.http.get(path)
            .map(this.extractData);
    }
    postServeData(path: string, data: any): Observable<any[]> {
        return this.http.post(path,data)
            .map(this.extractData);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body||{};
    }

    getTabs(): Observable<any[]> {
        return this.http.get('mockData/segment.json')
            .map(this.extractData);
    }
}
