import { Component } from '@angular/core';
import { CustomDirective } from "./custom-directive.component";

@Component({
  selector: 'app-question3',
  standalone: true,
  imports: [CustomDirective],
  templateUrl: './question3.component.html',
})
export class Question3Component {

}
