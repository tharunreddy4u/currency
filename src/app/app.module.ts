import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';  
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user/user.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent,UserComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
