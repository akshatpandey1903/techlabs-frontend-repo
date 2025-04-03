import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]',
  standalone: false
})
export class ChangecolorDirective {

  constructor(element:ElementRef) { element.nativeElement.style.color="hotpink"; }

}
