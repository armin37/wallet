import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'w-input',
  templateUrl: './w-input.component.html',
  styleUrls: ['./w-input.component.scss']
})
export class WInputComponent {
  @Input() control: FormControl;
  @Input() expand: 'full' | 'inline-block' | 'inline';
}
