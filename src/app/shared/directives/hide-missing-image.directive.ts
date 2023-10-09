import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideMissingImage]',
})
export class HideMissingImageDirective {
  constructor(private el: ElementRef) {}

  @HostListener('error')
  private onError() {
    this.el.nativeElement.parentElement.style.display = 'none';
  }
}
