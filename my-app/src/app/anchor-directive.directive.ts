import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAnchorDirective]'
})
export class AnchorDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
