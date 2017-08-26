import { Component, OnInit } from '@angular/core';
import {EditorService} from '../editor.service';

@Component({
  selector: 'app-editor-actions',
  templateUrl: './editor-actions.component.html',
  styleUrls: ['./editor-actions.component.scss']
})
export class EditorActionsComponent implements OnInit {
  MAX_LENGTH = 140;
  remainingChars = this.MAX_LENGTH;
  isBelowEnd = true;
  isNearTheEnd = false;
  isTweetable = false;

  constructor(private editorService: EditorService) { }

  ngOnInit() {
    this.editorService.currentMessage.subscribe(message => {
      this.remainingChars = this.MAX_LENGTH - message.length;
      this.isBelowEnd = 0 > this.remainingChars;
      this.isNearTheEnd = !this.isBelowEnd && 20 >= this.remainingChars;
      this.isTweetable = !this.isBelowEnd && this.MAX_LENGTH !== this.remainingChars;
    });
  }

}
