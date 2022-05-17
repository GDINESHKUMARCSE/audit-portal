import { NgModule } from  '@angular/core';
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSnackBarModule
  ],
})

export  class  CustomMaterialModule { }
