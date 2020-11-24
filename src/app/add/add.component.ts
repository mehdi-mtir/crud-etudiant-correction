import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() addEvent = new EventEmitter<Student>()
  constructor() { }

  addStudent(name : HTMLInputElement, firstname : HTMLInputElement, classe : HTMLInputElement){
    var newStudent = new Student(name.value, firstname.value, classe.value);
    //console.log(newStudent);
    this.addEvent.emit(newStudent);

    name.value = "";
    firstname.value = "";
    classe.value = "";
  }

  ngOnInit() {
  }

}
