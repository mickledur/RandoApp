import {Component} from '@angular/core';
import {Hike} from "./shared/hike";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hikes: Hike[];
  //numero: number[];
  //title = 'Welcome in Rando App... For the Moment Nothing is working !!!';

  constructor() {
    this.hikes = [

      {
        "id": 1,
        "name": "Saint-Aubun-du-Cormier",
        "region": "Bretagne",
        "area": "Ille-et-Vilaine",
        "startingPoint": "Plan d'eau",
        "distance": 12.8,
        "distanceUnit": "km",
        "duration": 240,
        "heightDifference": 267,
        "description": "Randonnée sympa, à démarrer par le plan d'eau pour finir sur les hauteurs de Saint Aubin. Rochers imposants et des arbres magnifiques sont effectivement au rendez-vous. Bonne balade",
        "evaluation": [4, 5, 3]
      },
      {
        "id": 2,
        "name": "Vallée du Couesnon",
        "region": "Bretagne",
        "area": "Ille-et-Vilaine",
        "startingPoint": "Château de la ville olivier",
        "distance": 15.6,
        "distanceUnit": "km",
        "duration": 270,
        "heightDifference": 200,
        "description": "Il faut être en forme pour cette rando car il y a beaucoup de dénivelés. Mais le jeu en vaut la chandelle car admirer les bords du Couesnon est un régal. Bonne randonnée ",
        "evaluation": [5, 5]
      },
      {
        "id": 3,
        "name": "Saint Quentin Fallavier",
        "region": "Rhône Alpes",
        "area": "Isère",
        "startingPoint": "étang de Fallavier",
        "distance": 6,
        "distanceUnit": "km",
        "duration": 90,
        "heightDifference": 267,
        "description": "L'occasion de visiter un des deux chateaux dans lequel a été tourné Kaamelott. A ceux qui vous diront que le point de vue du haut du donjon est panoramique, vous pourrez répondre : c'est pas faux",
        "evaluation": [4, 4, 3]
      },
      {
        "id": 4,
        "name": "Dune du Pilat",
        "region": "Nouvelle-Aquitaine",
        "area": "Gironde",
        "startingPoint": "Jetée Thiers",
        "distance": 12,
        "distanceUnit": "km",
        "duration": 240,
        "heightDifference": 267,
        "description": "D'Arcachon à la Teste de Buch, c'est une rando exigeante. Mais voir et parcourir la plus grande dune d'Europe mérite l'effort. 160 marches devront être gravies pour accéder au point de vue surréaliste sur l'océan et la pinède.",
        "evaluation": [5, 5, 4]
      }
    ]
    //this.numero=[1,5,6,8,6];
  }
}
