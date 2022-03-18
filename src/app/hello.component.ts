import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * A decorator that appears immediately before a class definition, which declares the class to be of the given type, and provides metadata suitable to the type.
 * @Component(),@Directive(),@Pipe(),@Injectable(),@NgModule()
 */

/**
 * The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata.
 * A Class's not a component until you mark it as one with the @Component decorator.
 */
/**@Component() class decorator */
@Component({
  selector: 'hello',
  template: `<h1 (click)="clickMe()">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  /**templateUrl:"" */
  /**
   * An array of providers for services that the component requires.
   * In the example, this tells Angular how to provide the Service instance that the component's constructor uses to get or to do something.
   */
  providers: [],
})
export class HelloComponent {
  /**
   * A decorator statement immediately before a field in a class definition that declares the type of that field.
   * Some examples are @Input and @Output
   */

  /**
   * Decorator that marks a class field as an input property and supplies configuration metadata.
   * The input property is bound to a DOM property in the template.
   * During change detection, Angular automatically updates the data property with the DOM property's value.
   * */
  /**@Input() class field decorator */
  @Input() name: string;
  @Output() clickHello: EventEmitter<any> = new EventEmitter<any>();

  clickMe() {
    this.clickHello.emit('from Child to Parent');
  }
}
