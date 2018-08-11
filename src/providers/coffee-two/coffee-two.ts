import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

/*
  Generated class for the CoffeeTwoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class CoffeeTwoProvider {

  constructor(public http: HttpClient) {
    console.log('CoffeeProvider construct');
  }

  getCoffee(): Observable<Coffee> {
    console.log('CoffeeProvider getCoffee');
    return this.http
      .get('http://localhost:8080/api/coffee/1', httpOptions)
      .map(response => {
        return new Coffee(response);
      });
  }
}

export class Coffee {
  id: number;
  name: string;
  brand: string;
  originatingCountry: string;
  roastery: string;

  constructor(values: Object = {}) {
  Object.assign(this, values);
  console.log('class Coffee called and values stored');
  console.log(this.id);
  console.log(this.name);
  console.log(this.brand);
  console.log(this.roastery);
  }  
}