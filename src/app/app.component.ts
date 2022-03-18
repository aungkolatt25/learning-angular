import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
}
