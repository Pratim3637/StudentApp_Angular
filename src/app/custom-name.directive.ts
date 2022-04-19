
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomName]'
})
export class CustomNameDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="green";
  }

}
