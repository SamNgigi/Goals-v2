// Note that we import the type ElementRef.
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikeThrough]'
})

export class StrikeThroughDirective {

  constructor(private element: ElementRef) {
    /* 
      `element` refers to the constructor property that refers to the HTML element the directive will be hosted on.

      We target the host element's style attribute and change the textDecoration to line-through.
    */
    this.element.nativeElement.style.textDecoration = "line-through";
  }
}
