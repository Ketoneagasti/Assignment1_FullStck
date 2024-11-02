import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question4',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './question4.component.html',
  styleUrl: './question4.component.css'
})
export class Question4Component {
  email: string = '';
}
