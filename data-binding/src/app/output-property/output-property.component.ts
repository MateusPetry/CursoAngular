import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    console.log(this.campoValorInput.nativeElement.value++);
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    console.log(this.campoValorInput.nativeElement.value--);
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
