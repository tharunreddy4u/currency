import { Component } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,
})
export class UserComponent  { 

  price: Price[];
  constructor(public http: Http) {
    http.get('https://api.fixer.io/latest?base=CAD')
    .map(resp =>  resp.json()).subscribe((price => {
      this.price= price;
      
    }));

  }

  
 }
 interface Price {
   base: string;
   rates: Object;
 }
 
 