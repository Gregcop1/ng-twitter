# Apprendre Angular en 30 minutes pour briller en société ou faire un entretien avec un minimum de confiance  

## Objets disponibles

Il existe 4 types d'objets en angular :

- Directive : Classe permettant de manipuler les objets du DOM (ngFor et ngIf en sont de parfait exemple. Désolé, je n'ai pas eu besoin d'en créer pour le moment sur ce projet)
- Controller : Directive à laquelle on attache une template (C'est le type d'objet que tu créeras le plus souvent, regarde tous les editor-textarea.components.ts pour exemple)
- Pipe : Classe permettant de transformer le contenu d'un variable (ex: gravatar.pipe.ts permet de transformer un email en url gravatar, c'est l'equivalent des filter de twig)
- Service : Classe permettant de gérer la communication à travers l'application. Les services ont notamment gérer la communication avec les services externes, API, etc. (ex: editor.services.ts) 

## Passer les données à un controller enfant

- Donnée en dur : <app foo="bar" /> -> on passe la chaîne "bar" dans l'input "foo" de "app"
- On way data binding : <app [foo]="bar" /> -> On passe le contenu de la variable bar à l'input "foo" de "app" (c'est l'équivalent d'un passage par valeur)
- Ecouteur : <app (statusChange)="doSomething()" /> -> On place un listener sur l'eventEmitter "statusChange" de "app"
- Two way data binding : <app [(foo)]="bar" /> -> on passe le contenu de la variable "bar" et on place en même temps un écouteur ce qui fait que si le contenu est modifié dans le parent ou dans l'enfant, ça sera répercuter partout (c'est en gros un passage par référence)

## Communication entre deux composants qui n'ont pas de relation parent enfant

A l'instar de React, on a aussi la possibilité de mettre Redux avec Angular, mais ce qui est préféré parce que c'est aussi la base de tout le framework, c'est d'utiliser le pattern Observable/Observer. Tu peux en trouver un exemple dans editor.service.ts
Je vous avais fait une [présentation](http://slides.com/gregorycopin/programmation-reactive#/) sur ce pattern. Ici, à l'instar de ce qui se passe à l'intérieur du framework, c'est RxJS qui est utilisé (c'est la librairie la puissante pour gérer ça) 
ene rentre pas plus dans les détails au sujet de ce pattern, sinon, on dépassera la demi heure :p

## Différence par rapport à AngularJS  

Bon pas sûr que ça te serve à grand chose mais au cas où :

- Beaucoup plus de rigueur
- Tout est en Objet/Class
- Disparition du scope au profit d'un héritage automatique de toutes les propriétés et méthodes publiques du controller
- Utilisation au maximum du pattern Observable/Observer pour remplacer les promises d'autrefois
- Utilisation des decorateurs/annotations 
- Utilisation de typescript

> Bon au final, j'ai l'impression qu'ils ont abandonné systemJS donc tant mieux, là, tout est assez simple à mettre en place.
> Tu pourras aussi tester ng-cli, c'est très utile, très customisable et très puissant.

Bon amusement
