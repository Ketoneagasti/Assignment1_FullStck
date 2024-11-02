import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question7.component.html',
  styleUrl: './question7.component.css'
})
export class Question7Component {
  students: { name: string; branch: string }[] = [
    { name: 'Amit', branch: 'S7 ECE' },
    { name: 'Arun', branch: 'S7 EAC' },
    { name: 'Akhil', branch: 'S7 EAC' }
  ];

  sortedStudents = this.students.sort((a, b) => a.name.localeCompare(b.name));

  get numberOfStudents() {
    return this.sortedStudents.length;
  }
}
