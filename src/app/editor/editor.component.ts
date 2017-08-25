import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  template: `
    <app-editor-input *ngIf="!focused" [(focusStatus)]="focused"></app-editor-input>
    <app-editor-textarea *ngIf="focused" [(focusStatus)]="focused"></app-editor-textarea>
  `,
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  focused = false;
}
