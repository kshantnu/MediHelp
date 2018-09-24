import { Directive,Input,Renderer2,ElementRef,AfterViewInit,HostListener,HostBinding } from '@angular/core';
import {FetchResultService} from '../searchresultlist/fetchresult.service';


@Directive({
  selector: '[appAutosuggestion]'
})
export class AutosuggestionDirective implements AfterViewInit {
  @Input('appAutosuggestion') config: Object = {
    
  };
  //@HostBinding('suggestions') private isSuggestionsVisible: boolean;
  
  constructor(private renderer: Renderer2,
    private elementRef: ElementRef, 
    private _fetchResultService: FetchResultService) {

   }

   ngAfterViewInit() {
   //appendElement() {
    // const d2 = this.renderer.createElement('div');
    // const text = this.renderer.createText('two');
    // this.renderer.appendChild(d2, text);
    // this.renderer.appendChild(this.elementRef.nativeElement, d2);
   //}
  }
  @HostListener('keyup') onMouseOver() {
   // console.log('hhh', this.config.text);
    //this._fetchResultService.fetchAutoSuggestions('jjjjj');

  }
  

}
