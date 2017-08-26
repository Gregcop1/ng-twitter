import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EditorService} from '../editor.service';

@Component({
  selector: 'app-editor-textarea',
  template: `
    <textarea #field (blur)="changeFocus()" [(ngModel)]="message" (ngModelChange)="changeMessage(field.value)"></textarea>
  `,
  styleUrls: ['./editor-textarea.component.scss']
})
export class EditorTextareaComponent implements OnInit {
  @Input() focusStatus: boolean;
  @Output() focusStatusChange = new EventEmitter<boolean>();

  @ViewChild('field') field: ElementRef;

  message = '';

  constructor(private editorService: EditorService) { }

  ngOnInit() {
    this.field.nativeElement.focus();
    this.editorService.currentMessage.subscribe(message => this.message = message);
  }

  changeFocus() {
    if ('' === this.message) {
      this.focusStatusChange.emit(false);
    }
  }

  changeMessage(message) {
    this.editorService.changeMessage(message);
  }
}
