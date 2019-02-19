import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';
import {CursosComponent} from './cursos/cursos.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1> Angular 2 Boilerplate</h1>
    <p> Hello World!<p>
    <meu-primeiro-component></meu-primeiro-component>
    <app-cursos></app-cursos>
  `
})
export class AppComponent {
  title = 'Olá mundo';
}
