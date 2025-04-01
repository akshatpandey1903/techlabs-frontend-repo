import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  @Input() freeCourses= 0;
  @Input() paidCourses= 0;
  @Input() totalCourses= 0;
}
