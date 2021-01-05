import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() student : Student;
  @Output() editedStudent = new EventEmitter<Student>();

  constructor() { }

  editStudent(name : HTMLInputElement, firstname : HTMLInputElement, classe : HTMLInputElement){
    let updatedStudent = new Student(name.value, firstname.value, classe.value);
    this.editedStudent.emit(updatedStudent);

    name.value = "";
    firstname.value = "";
    classe.value = "";

  }

  ngOnInit() {
  }

}
