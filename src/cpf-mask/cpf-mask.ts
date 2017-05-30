import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

var VMasker = require('vanilla-masker');

@Directive({
    selector: '[CPFMask]'
})
export class CPFMask{
    public nativeElement: HTMLInputElement;

    constructor(public element: ElementRef, public render: Renderer) {
        console.log(element);
        this.nativeElement = this.element.nativeElement;
        VMasker(this.nativeElement).maskPattern('999.999.999-99');
    }
}