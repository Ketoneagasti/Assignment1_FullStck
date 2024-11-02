import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question5.component.html',
  styleUrl: './question5.component.css'
})
export class Question5Component {
  name: string = '';  // Initialize as empty string

  // Method to change the name based on the input value
  changeName() {
    // Check if the name is not empty before changing
    if (this.name.trim()) {
      this.name = 'New Name';  // Change to 'New Name' only if input is valid
    }
  }
}
