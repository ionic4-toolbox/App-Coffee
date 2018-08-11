import { Component } from '@angular/core';

/**
 * Generated class for the ComponentsHelloWorldComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hello-world',
  templateUrl: 'components-hello-world.html'
})
export class HelloWorldComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentsHelloWorldComponent Component');
    this.text = 'Hello World';
  }

}
