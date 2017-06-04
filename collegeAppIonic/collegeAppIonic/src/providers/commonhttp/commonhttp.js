var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the CommonhttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var CommonhttpProvider = (function () {
    function CommonhttpProvider(http) {
        this.http = http;
        console.log('Hello CommonhttpProvider Provider');
    }
    CommonhttpProvider.prototype.getStudent = function () {
        return this.http.get('../api/student')
            .map(this.extractData);
    };
    CommonhttpProvider.prototype.getJsonFile = function (path) {
        return this.http.get(path)
            .map(this.extractData);
    };
    CommonhttpProvider.prototype.postServeData = function (path, data) {
        return this.http.post(path, data)
            .map(this.extractData);
    };
    CommonhttpProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CommonhttpProvider.prototype.getTabs = function () {
        return this.http.get('mockData/segment.json')
            .map(this.extractData);
    };
    return CommonhttpProvider;
}());
CommonhttpProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CommonhttpProvider);
export { CommonhttpProvider };
//# sourceMappingURL=commonhttp.js.map