import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector:'[hilightHero]'
})
export class HilightHeroDirective{
@HostBinding('width') width:string = '100';
@HostBinding('height') height:number = 100;

constructor(private eleRef: ElementRef, private renderer: Renderer2){

}

@HostListener('mouseenter') mouseover(ele:ElementRef){
    // this.renderer.setAttribute(this.eleRef.nativeElement, 'width', '200');
    // this.renderer.setAttribute(this.eleRef.nativeElement, 'height', '200');
this.width = '200';
this.height = 200;

}
@HostListener('mouseleave') mouseleave(ele:ElementRef){
    // this.renderer.setAttribute(this.eleRef.nativeElement, 'width', '100');
    // this.renderer.setAttribute(this.eleRef.nativeElement, 'height', '100');
this.width = '100';
this.height = 100;
}

}