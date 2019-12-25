import { NgModule } from "@angular/core";
import { MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDividerModule, MatCheckboxModule } from "@angular/material";

const matmods = [
    MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDividerModule, MatCheckboxModule
];

@NgModule({
    imports: matmods,
    exports: matmods
})
export class MaterialModules {}