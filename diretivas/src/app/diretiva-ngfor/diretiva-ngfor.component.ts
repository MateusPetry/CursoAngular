import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["curso1","curso2","curso3"];

  constructor() { }

  ngOnInit() {
    for(let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }

}
