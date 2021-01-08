import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private etudiantService : StudentService) { }

  addStudent(name : HTMLInputElement, firstname : HTMLInputElement, classe : HTMLInputElement){
    var newStudent = new Student(name.value, firstname.value, classe.value);
    //console.log(newStudent);
    this.etudiantService.addStudent(newStudent);
    name.value = "";
    firstname.value = "";
    classe.value = "";
  }

  ngOnInit() {
  }

}
