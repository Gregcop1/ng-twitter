import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

// Le décorateur Injectable permet de rendre une classe disponible à l'injection de dépendance
@Injectable()
export class EditorService {
  // déclaration d'un observable de type string
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    // un nouveau message est placé dans le flux de données. Tout écouteur qui est inscrit au flux
    // exécutera la chaîne de fonction qui lui est propre avec ce nouveau message
    this.messageSource.next(message);
  }

}
