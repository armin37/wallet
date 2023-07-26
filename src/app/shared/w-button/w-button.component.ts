import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'w-button',
  templateUrl: './w-button.component.html',
  styleUrls: ['./w-button.component.scss']
})
export class WButtonComponent {
  @Input() label = '';
  @Input() expand: 'full' | 'inline-block' | 'inline';
  @Input() loading = false;
  @Input() cssClasses = '';
  @Output() clicked = new EventEmitter();

  btnClicked() {
    this.clicked.emit()
  }
}
