import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, DoCheck {
  student : Student;

  constructor(private studentService : StudentService) { }

  editStudent(name : HTMLInputElement, firstname : HTMLInputElement, classe : HTMLInputElement){
    let updatedStudent = new Student(name.value, firstname.value, classe.value);
    this.studentService.editStudent(updatedStudent);

    name.value = "";
    firstname.value = "";
    classe.value = "";

  }

  ngDoCheck(){
    this.student = this.studentService.getCurrentStudent();
  }

  ngOnInit() {
    this.student = this.studentService.getCurrentStudent();
  }

}
