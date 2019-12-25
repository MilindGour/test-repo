import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkboxes-control',
  templateUrl: './custom-checkboxes-control.component.html',
  styleUrls: ['./custom-checkboxes-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomCheckboxesControlComponent)
    }
  ]
})
export class CustomCheckboxesControlComponent implements OnInit, ControlValueAccessor {

  miniForm: FormGroup;
  checkboxArray: FormArray;
  controlValue: string = "";

  onChange: (newValue) => void;
  onTouched: () => void;
  disabled: boolean = false;

  itemList: any[] = [
    { key: "A", value: "Apple", selected: false },
    { key: "B", value: "Ball", selected: false },
    { key: "C", value: "Cat", selected: false },
    { key: "D", value: "Dog", selected: false },
    { key: "E", value: "Elephant", selected: false }
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initMiniForm();
  }

  initMiniForm() {
    this.checkboxArray = this.fb.array(this.getControlsArray());

    this.miniForm = this.fb.group({
      dummy: [""],
      cb: this.checkboxArray
    });
  }

  private getControlsArray() {
    return this.itemList.map(item => this.fb.group(item));
  }

  onCheckboxChange(event, cbItem, index) {
    this.itemList[index].selected = event.checked;
    this.generateControlValue();

    this.onTouched();
  }

  private preSelectCheckboxesFromControlValue(controlValue: string) {
    if (controlValue == null) controlValue = "";
    this.itemList.forEach(item => {
      item.selected = controlValue.indexOf(item.key) > -1;
    });
    //this.generateControlValue(); //optional: raise the change event
  }

  private generateControlValue() {
    this.controlValue = this.itemList.filter(item => item.selected == true).map(item => item.key).join("");
    this.onChange(this.controlValue);
    return this.controlValue;
  }

  // ControlValueAccessor implementation
  writeValue(controlValue: string): void {
    this.preSelectCheckboxesFromControlValue(controlValue);
    setTimeout(() => this.generateControlValue(), 0);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
