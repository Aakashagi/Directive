import { Directive, Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {
  color='yellow';
  @Input() appHighlights= '';
 

  constructor(private el: ElementRef) { }

  @Input() defaultColor: any;

  @Input('appHighlights') highlightsColor: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightsColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}