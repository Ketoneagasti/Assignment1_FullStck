import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question6',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './question6.component.html',
  styleUrl: './question6.component.css'
})
export class Question6Component {
  name: string = '';
  changeName() {
    if (this.name.trim()) {
      this.name = 'New Name';
    }
  }
}
