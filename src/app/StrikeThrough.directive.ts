// Note that we import the type ElementRef.
// Note that we import the Input and HostListener decorators.
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikeThrough]'
})

export class StrikeThroughDirective {
  /* 
      `element` refers to the constructor property that refers to the HTML element the directive will be hosted on.

      
    */

  constructor(private element: ElementRef) { }

  /* 
    The HostListener Annotation/Decorator is responsible for capturing events that occur on the host element.

    We create 2 HostListener annotations. One that listens for single
    clicks and another for double-clicks. 
  */

  @HostListener("click") onClicks() {
    this.strikeThrough("line-through");
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.strikeThrough("none");
  }

  /* 
    We will create a the function strikeThrough that targets the
    element reference and takes in a CSS style attribute as an
    argument.
  */

  private strikeThrough(text_decoration_style: string) {

    /* 
      We target the host element's style attribute and change the
      textDecoration to line-through when goal is complete or none when it is not.

    */

    this.element.nativeElement.style.textDecoration = text_decoration_style;
  }

}
