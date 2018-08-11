import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoffeeTwoProvider } from '../../providers/coffee-two/coffee-two';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{
  coffee: any;

  constructor(public navCtrl: NavController, private coffeeProvider: CoffeeTwoProvider) {}
  
  ngOnInit() {
    console.log('ngOnInit is executed');
    this.getCoffee();
  }

  getCoffee() : void {
    this.coffeeProvider.getCoffee()
    .subscribe(
      (data) => {
        this.coffee = data;
      },
      err => {
        console.error(err)
      },
      () => console.log('coffee loaded')
    );
  }

}
