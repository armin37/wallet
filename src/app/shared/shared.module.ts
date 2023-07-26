import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WButtonComponent } from './w-button/w-button.component';
import { WInputComponent } from './w-input/w-input.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        WButtonComponent,
        WInputComponent
    ],
  exports: [
    WButtonComponent,
    WInputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
