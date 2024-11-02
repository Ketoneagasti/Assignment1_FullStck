import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'custom-directive, .custom-directive, [custom-directive]',
  standalone: true
})
export class CustomDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (el.nativeElement.tagName.toLowerCase() === 'custom-directive') {
      renderer.setProperty(el.nativeElement, 'innerText', 'Made by a directive using element name!');
    } else if (el.nativeElement.classList.contains('custom-directive')) {
      renderer.setProperty(el.nativeElement, 'innerText', 'Made by a directive using class!');
    } else if (el.nativeElement.hasAttribute('custom-directive')) {
      renderer.setProperty(el.nativeElement, 'innerText', 'Made by a directive using attribute!');
    }
  }
}