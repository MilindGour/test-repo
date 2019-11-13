import { NgModule } from "@angular/core";
import { MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule } from "@angular/material";

const matmods = [
    MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule,
    MatFormFieldModule, MatInputModule
];

@NgModule({
    imports: matmods,
    exports: matmods
})
export class MaterialModules {}