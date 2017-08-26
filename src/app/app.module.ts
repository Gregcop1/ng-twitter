import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorInputComponent } from './editor-input/editor-input.component';
import { EditorTextareaComponent } from './editor-textarea/editor-textarea.component';
import { EditorComponent } from './editor/editor.component';
import {FormsModule} from '@angular/forms';
import { GravatarPipe } from './gravatar.pipe';
import { EditorActionsComponent } from './editor-actions/editor-actions.component';
import {EditorService} from './editor.service';

@NgModule({
  declarations: [
    AppComponent,
    EditorInputComponent,
    EditorTextareaComponent,
    EditorComponent,
    GravatarPipe,
    EditorActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    EditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
