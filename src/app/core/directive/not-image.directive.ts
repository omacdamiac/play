import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNotImage]',
})
export class NotImageDirective {
  constructor(
    private imgAll: ElementRef,
  ) {}
  @HostListener('error')
  onError(): void {
    this.imgAll.nativeElement.src = '../../../assets/noimage.png';
  }
}