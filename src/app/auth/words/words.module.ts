import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsRoutingModule } from './words-routing.module';
import { WordsComponent } from './words.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    WordsComponent
  ],
  imports: [
    CommonModule,
    WordsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class WordsModule { }
