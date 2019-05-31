import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radius',
  templateUrl: './radius.component.html',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> RadiusComponent),
    multi: true
  }]
})
export class RadiusComponent implements OnInit, ControlValueAccessor {

  @Input()
  options: RadioOption[];
  value: any;
  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(valor: any){
    this.value = valor;
    this.onChange(this.value);
  }

  /**
     * Write a new value to the element.
     */
  writeValue(obj: any): void{
    this.value = obj;
  }
    /**
     * Set the function to be called when the control receives a change event.
     */
  registerOnChange(fn: any): void{
    this.onChange = fn;
  }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: any): void{
    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void{

    }
}
