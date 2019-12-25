import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material-modules.module';
import { InfoDlgComponent } from './info-dlg/info-dlg.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormComponentComponent } from './form-component/form-component.component';
import { CustomCheckboxesControlComponent } from './custom-checkboxes-control/custom-checkboxes-control.component';

@NgModule({
   declarations: [
      AppComponent,
      InfoDlgComponent,
      FormComponentComponent,
      CustomCheckboxesControlComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModules,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      InfoDlgComponent
   ]
})
export class AppModule { }
