import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')onMouseOver(){
    // this._renderer.setElementStyle(
    //   this._ElementRef.nativeElement,
    //   'background-color', 'yellow'
    //   );
    this.corDoBackground = 'yellow';
  }

  @HostListener('mouseleave')onMouseLeave(){
    // this._renderer.setElementStyle(
    //   this._ElementRef.nativeElement,
    //   'background-color', 'white'
    //   );
    this.corDoBackground = 'white';
  }
@HostBinding('style.backgroundColor')corDoBackground: string;

// @HostBinding('style.backgroundColor') get setColor(){
//   //código extra
//   return this.corDoBackground;
// }
// private corDoBackground: string;

  constructor(private _ElementRef: ElementRef, private _renderer: Renderer) { }

}
