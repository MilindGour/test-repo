import { NgModule } from "@angular/core";
import { MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from "@angular/material";

const matmods = [
    MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSnackBarModule
];

@NgModule({
    imports: matmods,
    exports: matmods
})
export class MaterialModules {}