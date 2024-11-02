import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.css'
})
export class Question2Component {
  students = [
    { name: 'Amit', course: 'S7 ECE' },
    { name: 'Arun', course: 'S7 EAC' },
    { name: 'Akhil', course: 'S7 EAC' }
  ];

  studentCount: number = 0;

  constructor() {
    this.students.forEach(() => {
      this.studentCount++;
    });
  }
}