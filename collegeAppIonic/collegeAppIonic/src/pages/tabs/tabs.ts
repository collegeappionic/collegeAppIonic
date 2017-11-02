import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { IndexPage } from "../index/index";
import { EvaluationPage } from "../evaluation/evaluation";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = IndexPage;  
    tab2Root = AboutPage;
    tab3Root = ContactPage;
    tab4Root = EvaluationPage;

  constructor() {
        
  }
}
