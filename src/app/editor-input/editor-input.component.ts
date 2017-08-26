import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor-input',
  template: `
    <input type="text" (focus)="changeFocus()" />
  `,
  styleUrls: ['./editor-input.component.scss']
})
export class EditorInputComponent {
  @Input() focusStatus: boolean;
  @Output() focusStatusChange = new EventEmitter<boolean>();

  changeFocus() {
    this.focusStatusChange.emit(true);
  }
}
