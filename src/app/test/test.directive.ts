import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class TestDirective {
  @Input('appHighlight') highlight;
  @Input() defaultColor = '';
  constructor(private el: ElementRef) {
    this.setColor((this.highlight) ? this.highlight : this.defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.highlight.color || this.defaultColor || 'gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
