var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ActionsheetPage } from '../pages/actionsheet/actionsheet';
import { DatepickPage } from '../pages/datepick/datepick';
import { AlertPage } from '../pages/alert/alert';
import { InputsPage } from '../pages/inputs/inputs';
import { ListPage } from '../pages/list/list';
import { PopoverPage } from '../pages/popover/popover';
import { DefaultlistPage } from '../pages/defaultlist/defaultlist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActionsheetComponent } from '../components/actionsheet/actionsheet';
import { CommonhttpProvider } from '../providers/commonhttp/commonhttp';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            ActionsheetComponent,
            ActionsheetPage,
            DatepickPage,
            AlertPage,
            ListPage,
            InputsPage,
            PopoverPage,
            DefaultlistPage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp, {}),
            HttpModule,
            JsonpModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            ActionsheetPage,
            DatepickPage,
            AlertPage,
            ListPage,
            InputsPage,
            PopoverPage,
            DefaultlistPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            CommonhttpProvider
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map