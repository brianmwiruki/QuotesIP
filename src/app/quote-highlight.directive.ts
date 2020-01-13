import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {


  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elem.nativeElement, 'backgroud-color', 'lavender');
  }

}
