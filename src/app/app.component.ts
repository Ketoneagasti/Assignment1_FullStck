import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question4Component } from './question4/question4.component';
import { Question3Component } from './question3/question3.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { CustomDirective } from './question3/custom-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Question1Component, Question2Component, CustomDirective, Question3Component, Question4Component, 
    Question5Component, Question6Component, Question7Component, Question3Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment1';
}
