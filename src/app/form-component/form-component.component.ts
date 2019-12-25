import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  theFormGroup: FormGroup;
  formRawValue: any;

  constructor(private fb: FormBuilder) { 
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.theFormGroup = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]]
    });
  }

  onGetRawValueClicked() {
    this.formRawValue = this.theFormGroup.getRawValue();
  }
}
