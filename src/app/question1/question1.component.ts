import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.css'
})
export class Question1Component {
  name : string = "";
}
