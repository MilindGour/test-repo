import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InfoDlgComponent } from './info-dlg/info-dlg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-box';
  name: string = "";
  age: number = 0;
  email: string = "";

  constructor(private dialog: MatDialog) {}
  openDialog() {
    let dlgRef = this.dialog.open(InfoDlgComponent, {
      data: {
        fullName: 'Random Name',
        age: 22,
        email: 'Random Email'
      }
    });
    dlgRef.afterClosed().subscribe((value) => {
      console.log("Dialog Value emitted:::", value);
      if (value) {
        this.name = value.fullName;
        this.age = value.age;
        this.email = value.email;
      } else {
        this.name = "";
        this.age = 0;
        this.email = "";
      }
    });
  }
}
