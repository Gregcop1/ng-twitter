import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-editor-textarea',
  template: `
    <textarea #field (blur)="changeFocus()" [(ngModel)]="fieldValue"></textarea>
  `,
  styleUrls: ['./editor-textarea.component.css']
})
export class EditorTextareaComponent implements OnInit {
  @Input() focusStatus: boolean;
  @Output() focusStatusChange = new EventEmitter<boolean>();

  @ViewChild('field') field: ElementRef;

  fieldValue = '';

  changeFocus() {
    if ('' === this.fieldValue) {
      this.focusStatusChange.emit(false);
    }
  }

  ngOnInit() {
    this.field.nativeElement.focus();
  }

}
