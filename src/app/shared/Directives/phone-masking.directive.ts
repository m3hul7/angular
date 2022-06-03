import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMasking]'
})
export class PhoneMaskingDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event:any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event:any) {
    this.onInputChange(event.target.value, true);
  }
  
  @HostListener('focus') 
  onfocus() {
    this.ngControl.valueAccessor?.writeValue("+91")
  }
/**
 * 
 * @param event 
 * @param backspace 
 */
  onInputChange(event:any, backspace:boolean) {
    let newVal = event.replace(/\D|\W/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length);
    }
    if (newVal.length === 0) {
      newVal = '91';
    } else if (newVal.length <= 7) {
      newVal = newVal.replace(/(\d{0,2})(\d{0,4})/, '$1 $2');
    } else if (newVal.length <= 12) {
      newVal = newVal.replace(/(\d{0,2})(\d{0,4})(\d{0,6})/, '$1 $2-$3');
    } else {
      newVal = newVal.substring(0, 12);
      newVal = newVal.replace(/(\d{0,2})(\d{0,4})(\d{0,6})/, '$1 $2-$3');
    }
    newVal = '+' + newVal;
    this.ngControl.valueAccessor?.writeValue(newVal);
  }

}
