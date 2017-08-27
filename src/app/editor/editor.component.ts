import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  template: `
    <div class="block writer-block">
      <img [src]="user.email | gravatar" width="50" height="50" alt="" class="avatar"/>
      <app-editor-input *ngIf="!focused" [(focusStatus)]="focused"></app-editor-input>
      <app-editor-textarea *ngIf="focused" [(focusStatus)]="focused"></app-editor-textarea>
      <app-editor-actions *ngIf="focused"></app-editor-actions>
    </div>
  `,
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  focused = false;
  user = {
    email: 'gregcop1@gmail.com'
  };
}
