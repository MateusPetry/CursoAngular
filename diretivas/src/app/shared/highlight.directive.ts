import { Directive, HostBinding, HostListener, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')onMouseOver(){
    this.corDoBackground = this.highlightColor;
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.corDoBackground = this.defaultColor;
  }
@HostBinding('style.backgroundColor') corDoBackground: string;

@Input() defaultColor : string ='white';
@Input('highlight') highlightColor : string ='yellow';

  constructor() { }

  ngOnInit(){
    this.corDoBackground = this.defaultColor;
  }

}