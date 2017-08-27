import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EditorService} from '../editor.service';

// Le décorateur qui suit permet de décrire toutes les méta données qui décrivent le composant

@Component({
  selector: 'app-editor-textarea', // la balise qu'il faudra utiliser  pour déclencher ce controller <app-editor-textarea>
  template: `
    <textarea #field (blur)="changeFocus()" [(ngModel)]="message" (ngModelChange)="changeMessage(field.value)"></textarea>
  `, // on peut définir une template inline quand elle est courte ou via un fichier HTML comme dans editor-actions
  styleUrls: ['./editor-textarea.component.scss'] // on peut définir les style inline ou via un fichier externe
})
// Il existe tout un tas d'interface pour venir s'insérer dans  le cycle de vie des rendus
export class EditorTextareaComponent implements OnInit {
  // le décorateur Input permet de capturer une variable passer en attribut au controller (cf. editor.component.ts l.9
  @Input() focusStatus: boolean;
  // le décorateur Output permet de déclarer un EventEmitter écoutable depuis l'extérieur
  @Output() focusStatusChange = new EventEmitter<boolean>();

  // le décorateur ViewChild permet de parcourir les enfants de la teamplate pour voir la balise disposant d'une
  // déclaration de variable "#field"
  @ViewChild('field') field: ElementRef;

  message = '';

  // Typescript permet de déclarer les variable depuis l'injection de dépendance du constructeur
  // Ouais je sais, ça serait top d'avoir ça en PHP
  constructor(private editorService: EditorService) { }

  ngOnInit() {
    this.field.nativeElement.focus();
    // Ici on place à écouteur sur Observable currentMesssage du service editorService
    // Quand une nouvelle valeur apparaît dans le flux de l'observable, la fonction entre parenthèse est lancée
    // Pour info, on peut chaîner les fonctions pour manipuler les données comme on le fait avec les tableaux
    // en JS (reduce, map, filter, ...)
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
