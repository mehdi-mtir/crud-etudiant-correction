import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';
import { PrixPipe } from './prix.pipe';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students : Student[];
  action : string;
  currentIndex : number;
  currentStudent : Student;

  addStudent(){
    this.action = "add";
  }

  pushStudent(s : Student){
    this.students.push(s);
    this.action = ""; 
  }

  showEditStudent(s : Student, indice : number){
    this.action= "edit";
    this.currentIndex = indice;
    this.currentStudent = s;
  }

  editStudent(s : Student){
    this.students[this.currentIndex] = s;
    this.action = "";
  }

  deleteStudent(indice : number){
    if(confirm("Etes-vous sûre de vouloir supprimer l'étudiant " + this.students[indice].name)){
      this.students.splice(indice, 1);
    }
  } 

  ngOnInit(){
    this.students = [
      new Student("Tounsi", "Mohamed", "L2DSI1"),
      new Student("Ben Ayed", "Ali", "L2DSI2"),
      new Student("Ben Fraj", "Meriem", "L2DSI3")
    ];

    this.action = "";
  }

}
