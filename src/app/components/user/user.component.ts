import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,
})
export class UserComponent implements OnInit { 

  price: Price[];
  price1: Price[];
  price2: Price[];
  val = 0;
  conval = 0;
  optionSelected1: any;
  optionSelected2: any;
  

  constructor(public http: Http) {
    http.get('https://api.fixer.io/latest?base=CAD')
    .map(resp =>  resp.json()).subscribe((price => {
      this.price= price;
      
    }));
    http.get('https://api.fixer.io/latest?base=USD')
    .map(resp =>  resp.json()).subscribe((price1 => {
      this.price1= price1;
      
    }));
    http.get('https://api.fixer.io/latest?base=EUR')
    .map(resp =>  resp.json()).subscribe((price2 => {
      this.price2= price2;
      
    }));
   

  }
  

  
  public amtChange() 
  {
    if(this.optionSelected1=='CAD')
    {
      if(this.optionSelected2=="USD")
      {
        this.conval = this.val * this.price.rates.USD;

      }
      if(this.optionSelected2=="EUR")
      {
        this.conval = this.val * this.price.rates.EUR;

      }
      if(this.optionSelected2=="CAD")
      {
        this.conval = this.val;

      }

    }
    if(this.optionSelected1=='USD')
    {
      if(this.optionSelected2=="CAD")
      {
        this.conval = this.val * this.price1.rates.CAD;

      }
      if(this.optionSelected2=="EUR")
      {
        this.conval = this.val * this.price1.rates.EUR;

      }
      if(this.optionSelected2=="USD")
      {
        this.conval = this.val;

      }

    }
    if(this.optionSelected1=='EUR')
    {
      if(this.optionSelected2=="CAD")
      {
        this.conval = this.val * this.price2.rates.CAD;

      }
      if(this.optionSelected2=="USD")
      {
        this.conval = this.val * this.price2.rates.USD;

      }
      if(this.optionSelected2=="EUR")
      {
        this.conval = this.val;

      }

    }
    
  }
  
 }
 interface Price {
   base: string;
   rates: Object;
 }
 
 