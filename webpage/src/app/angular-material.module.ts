import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatSliderModule} from '@angular/material/slider';
import { MatSelectModule } from "@angular/material/select";

const materialModules = [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSliderModule,
];

@NgModule({
    imports: [
        CommonModule,
        materialModules
    ],
    exports: [
        materialModules
    ]
    
})
export class AngularMaterialModule {}