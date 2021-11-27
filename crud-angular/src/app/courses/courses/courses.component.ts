import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['name','category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    // this.courses = this.coursesService.list(); // Segunda Opção mesma coisa anterior
  }

}
