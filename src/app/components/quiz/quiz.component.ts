import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  constructor() { }
  opcion: boolean = true;
  
  ngOnInit() {
  }
  seleccion(){    
    this.opcion = true;    
  }
  seleccion2(){
    this.opcion = false;
  }
}
