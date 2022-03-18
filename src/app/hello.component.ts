import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 (click)="clickMe()">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  /**templateUrl:"" */
  /**styleUrl:"" */

  /**
   * An array of providers for services that the component requires.
   * In the example, this tells Angular how to provide the Service instance that the component's constructor uses to get or to do something.
   */
  providers: [],
})
export class HelloComponent {
  /**
   * Decorator that marks a class field as an input property and supplies configuration metadata.
   * The input property is bound to a DOM property in the template.
   * During change detection, Angular automatically updates the data property with the DOM property's value.
   * */
  /**@Input() class field decorator */
  @Input() name: string;
  /**
   * Output Decorator use to with EventEmitter.
   * Mean is, event is handled by parent
   */
  @Output() clickHello: EventEmitter<any> = new EventEmitter<any>();

  clickMe() {
    this.clickHello.emit('from Child to Parent');
  }
}
