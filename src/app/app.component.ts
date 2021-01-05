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

  addStudent(){
    this.action = "add";
  }

  pushStudent(s : Student){
    this.students.push(s);
    this.action = ""; 
  }

  editStudent(){
    this.action= "edit";
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
