import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from './student';
import { StudentsService } from '../../shared/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  studentForm: FormGroup;
  tester: any;
  students : Array<Student>;

  student = new Student();

  constructor(fb: FormBuilder, 
             private studentsService : StudentsService)
              { 

    this.studentForm = fb.group({
      //'email' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'dob' : [null, [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      'gpa' : [null, [Validators.required, Validators.pattern(/^[0]|[0-3]\.(\d?\d?)|[4].[0]$/)]]
     // 'password': [null, Validators.required],
    })
  }

  ngOnInit() {
    this.studentsService.loadStudents()
    .subscribe(students => {
      this.students = students;
      
    });
  }

  onCancel() {
    this.student = new Student();
    this.studentForm.reset();
  }
  
  getNewId() {
    this.students.sort(function (a, b) {
      return a.Id - b.Id;
    });

    var id = (this.students[this.students.length-1].Id + 1);

    return id;
  }


  submitForm(value: any){ 
    //this.tester = 4;
    this.student.GPA = Number(value.gpa);
    this.student.DOB = value.dob;
    this.student.Firstname = value.firstName;
    this.student.Id = this.getNewId();
    this.student.Lastname = value.lastName;
    
    this.studentForm.reset();
    
    this.studentsService.createStudent(this.student)
    .subscribe(student => {
      this.student = student;
      //this.tester = 4;
      this.studentsService.loadStudents()
      .subscribe(students => {
        this.students = students;
      });
    });
  }

}
