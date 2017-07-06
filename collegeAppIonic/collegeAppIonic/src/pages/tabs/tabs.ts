import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { IndexPage } from "../index/index";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = IndexPage;  
    tab2Root = AboutPage;
    tab3Root = ContactPage;

  constructor() {
        
  }
}
