import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * A decorator that appears immediately before a class definition, which declares the class to be of the given type, and provides metadata suitable to the type.
 * @Component(),@Directive(),@Pipe(),@Injectable(),@NgModule()
 */

/**
 * What are decorators?
 * Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the original source code.
 * In AngularJS, decorators are functions that allow a service, directive or filter to be modified prior to its usage.
 */

/**
 * The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata.
 * A Class's not a component until you mark it as one with the @Component decorator.
 */
/**@Component() class decorator */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * A decorator statement immediately before a field in a class definition that declares the type of that field.
   * Some examples are @Input and @Output
   */

  /**
   * Property decorator that configures a view query.
   * The change detector looks for the first element or the directive matching the selector in the view DOM.
   *  If the view DOM changes, and a new child matches the selector, the property is updated.
   */
  @ViewChild('ref') input: ElementRef;

  name = 'Angular ' + VERSION.major;
  loop = [1, 2, 3];

  showMessage($event) {
    console.log($event);
    this.input.nativeElement.value = 'Hello';
    alert('HELLO');
  }

  clickHello($event) {
    alert($event);
  }

  onSubmit(customform) {
    console.log(customform.value);
  }
}
