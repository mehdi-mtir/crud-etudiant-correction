import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { Student } from './model/student';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  students : Student[];
  action : string;

  constructor(private serviceStudent : StudentService){

  }
  

  showAddStudent(){
    this.serviceStudent.changeAction("add");
  }

  
  showEditStudent(s : Student, indice : number){
    this.serviceStudent.changeAction("edit");
    this.serviceStudent.currentIndex = indice;
    this.serviceStudent.currentStudent = s;
  }
 

  ngDoCheck(){
    this.students = this.serviceStudent.getStudents();
    this.action = this.serviceStudent.getAction();
  }

  ngOnInit(){
    this.students = this.serviceStudent.getStudents();
    this.action =  this.serviceStudent.getAction();
  }

}
