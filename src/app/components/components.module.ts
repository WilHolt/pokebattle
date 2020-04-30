import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports:[PopupComponent]
})
export class ComponentsModule { }
