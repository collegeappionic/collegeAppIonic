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

@NgModule({
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
        IonicModule.forRoot(MyApp, {
        }),
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
export class AppModule { }
