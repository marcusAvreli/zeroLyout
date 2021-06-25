import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as coreComponents from './core/components';

//import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
   // AppComponent
  ],
  imports: [
    BrowserModule,
	    CoreModule,

  ],
  providers: [],
  bootstrap: [coreComponents.AppComponent]

})
export class AppModule { }
