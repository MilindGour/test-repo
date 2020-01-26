import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-custom-input-control',
  templateUrl: './custom-input-control.component.html',
  styleUrls: ['./custom-input-control.component.css'],
  providers: []
})
export class CustomInputControlComponent implements OnInit, OnDestroy, Validator {
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

  displayValue: string = "";
  actualValue: string = "";
  disabled: boolean = false;

  @ViewChild('inputField', { static: true }) inputField: ElementRef;

  private blurSub: Subscription;
  private focusSub: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.blurSub = fromEvent(this.inputField.nativeElement, 'blur').subscribe(() => this.onInputFieldBlurred());
    this.focusSub = fromEvent(this.inputField.nativeElement, 'focus').subscribe(() => this.onInputFieldFocussed());
  }
  ngOnDestroy() {
    this.blurSub.unsubscribe();
    this.focusSub.unsubscribe();
  }

  onInputFieldFocussed(): void {
    //User has focussed on input field
    console.log("Input field focussed");
    this.inputField.nativeElement.value = this.actualValue;
  }

  onInputFieldBlurred() {
    //User has lost focus from input field
    console.log("Input field blurred");
    let val = this.inputField.nativeElement.value;
    this.disabled = true; //take no more entries from the user
    this.getDataFromServer(val);
  }

  private getDataFromServer(id: string) {
    let fullURL = `https://my-json-server.typicode.com/typicode/demo/posts/${id}`;
    let sub = this.http.get(fullURL).subscribe((response: any) => {
      console.log("Response received:", response);
      this.actualValue = id;
      this.displayValue = `${response.id} - ${response.title}`;
      this.inputField.nativeElement.value = this.displayValue;
      this.disabled = false;
      sub.unsubscribe();
    }, err => {
      this.actualValue = id;
      this.displayValue = `${id} - Invalid`;
      this.inputField.nativeElement.value = this.displayValue;

      if (err.status === 404) {
        console.log("No data for the specified id");
      }
      this.disabled = false;
    });
  }
}
