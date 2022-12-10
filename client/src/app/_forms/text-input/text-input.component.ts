import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl:'./text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string | any;
  @Input() labelMustMatch: string | any   = '';
  @Input() placeHolder: string | any   = '' ;
  @Input() type: string | any   = 'text';

  constructor(@Self() public ngControl: NgControl ) {
    this.ngControl.valueAccessor = this;
   }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  
}
