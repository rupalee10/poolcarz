import { Directive,ElementRef,Renderer2,Input,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appMousehover]'
})
export class MousehoverDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 

  }
  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

  @HostListener('mouseleave') mouseleave(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

}