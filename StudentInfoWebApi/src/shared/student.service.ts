import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Student } from '../app/students/student';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:55095/api/Students';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json'}) };

@Injectable()
export class StudentsService {
  constructor(private http: Http) {}

  loadStudents() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
     // .map(students => students.map(student => Object.assign({}, student)));
  }

  createStudent(student: Student) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(student), HEADER)
      .map(res => res.json());
  }

}