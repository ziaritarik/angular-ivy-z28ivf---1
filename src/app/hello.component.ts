import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{message}} {{counter}}!</h1><P>{{LongMessage}}</p>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  message = 'world';
  counter = 0;
  LongMessage = 'Lorem Ipsum';
  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
