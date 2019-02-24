import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatRippleModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, 
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatRippleModule,
  ],
  imports: [
    MatButtonModule, 
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatRippleModule,
  ],
})
export class AngularMaterialModule { }