import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorInputComponent } from './editor-input/editor-input.component';
import { EditorTextareaComponent } from './editor-textarea/editor-textarea.component';
import { EditorComponent } from './editor/editor.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditorInputComponent,
    EditorTextareaComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
