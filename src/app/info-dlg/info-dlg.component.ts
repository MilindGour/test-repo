import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-info-dlg',
  templateUrl: './info-dlg.component.html',
  styleUrls: ['./info-dlg.component.scss']
})
export class InfoDlgComponent implements OnInit {

  infoForm: FormGroup;

  public get f() { return this.infoForm.controls; }

  constructor(private fb: FormBuilder, private dlgRef: MatDialogRef<InfoDlgComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm() {
    this.infoForm = this.fb.group({
      fullName: [this.data.fullName || "", [Validators.required]],
      age: [this.data.age || null, [Validators.required]],
      email: [this.data.email || "", [Validators.required]]
    });
  }
  public onCloseDialog(result: boolean) {
    if (result === true) {
      if (this.infoForm.valid) {
        this.dlgRef.close(this.infoForm.getRawValue());
      } else {
        this.infoForm.markAllAsTouched();
      }
    } else {
      this.dlgRef.close(null);
    }
  }
}
