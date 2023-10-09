import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'textarea[appAutoResizeTextArea]',
})
export class AutoResizeTextAreaDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input')
  onInput() {
    this.resize();
  }

  private resize() {
    this.renderer.setStyle(this.el.nativeElement, 'height', 'auto');
    this.renderer.setStyle(
      this.el.nativeElement,
      'height',
      this.el.nativeElement.scrollHeight + 'px'
    );
  }
}
