import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-custom-checkboxes-control',
  templateUrl: './custom-checkboxes-control.component.html',
  styleUrls: ['./custom-checkboxes-control.component.css']
})
export class CustomCheckboxesControlComponent implements OnInit {

  miniForm: FormGroup;
  checkboxArray: FormArray;
  controlValue: string = "";

  itemList: any[] = [
    { key: "A", value: "Apple" },
    { key: "B", value: "Ball" },
    { key: "C", value: "Cat" },
    { key: "D", value: "Dog" },
    { key: "E", value: "Elephant" }
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

  onCheckboxChange(event, cbItem) {

    let newControlValue = "";
    this.checkboxArray.controls.forEach((cb) => {
      if (cb.value.key !== cbItem.value.key) {
        if (this.controlValue.indexOf(cb.value.key) > -1) {
          //current checkbox is not the one clicked by user, and it is present in the previous control value
          newControlValue += cb.value.key;
        }
      } else {
        //user has interacted with this cb
        if (event.checked) {
          newControlValue += cb.value.key;
        }
      }
    });

    this.controlValue = newControlValue;
  }
}
