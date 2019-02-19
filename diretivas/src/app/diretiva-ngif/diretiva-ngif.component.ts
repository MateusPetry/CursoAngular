import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos:string[] = [];
  mostrarCursos: boolean = false;
  
 aba: string = '';
 
 
 

  constructor() {
    console.log(this.aba);
   }

  ngOnInit() {
  }
  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
