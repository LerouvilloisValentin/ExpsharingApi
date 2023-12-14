import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupsService {
  groups = [
      {
        "facesnaps": {
          "title": "Praha - Czech Republic",
          "description": "Prague en République Tchèque est une ville que j'ai adoré surtout grâce à son architecture qui a réussi à me faire pensé à l'Espagne à certain moment. Il y a beaucoup de monument à visité et une place pleine de vie, très agréable toutes les fois où je m'y susi rendu (old town). Le pont Charles et le chateau de Prague -->Top.\n\n En été les chaleurs ne sont pas écrasante et c'est peut être aussi dû à une pollution plus faible.\n\nIl y a principalement des pavés pas facile de se déplacé tout le temps en trottinette mais ça reste super pour visité cette grande ville. Je suis aller visiter la plus ancienne des bibliothèques et l'ai apprécié pour la parti de celle-ci qui est toute orné et spectaculaire et aussi pour la visite de son sommet permettant de voir Pragues à 360 degrés.\n\nNiveaux sympathie des habitants dure d'en juger très peu de Tchèque parler Anglais, c'était d'ailleurs compliqué de se faire comprendre.",
          "imageUrl": "https://getsready.com/wp-content/uploads/2017/02/best-scenery-at-prague-696x435.jpg",
          "location": "Pragues",
          "snaps": 14,
          "createdDate": "2023-12-05T15:05:15.690Z",
          "id": 3
        }
      },
      {
        "culinaire": {
          "title": "Koréan street food",
          "description": "Première fois que je mangeais coréen et à cette occasion c'était au \"Chikin bang x Xing fu Tang\" au Cordeliers à Lyon. \n\nLe style très atypique est attirant et sympa. Le couloir en entrant est la réplique d'une rue et la déco est lumineuse et agréable. \n\nC'est convivial pour partager différent plats et goûter pleins de choses. Au niveau Gout le poulet au top, un tapas peut être trop pimenté mais ce que j'ai adoré c'est les Guabos.",
          "imageUrl": "https://1.bp.blogspot.com/-X2ltoSzR0vQ/XVTDzwj_XGI/AAAAAAAAKCo/HD1rVb7xMWULf2CfYJlONT0iXNon9FM7ACLcBGAs/s1600/Korean%2BStreet%2BFood.jpg",
          "location": "Lyon ",
          "snaps": 0,
          "createdDate": "2023-12-05T14:40:49.384Z",
          "id": 5
        }
      },
      {
        "game": {
          "title": "Overwatch",
          "description": "Il est dans mon Top 3 de mes jeux préférés (je n'ai pas de top1 car cela dépend de mes humeurs et des périodes) \n\nJeux en Free to Play depuis à peine deux ans que j'ai connu et acheté à l'époque. L'univers coloré et les combats en 5vs5 m'ont pas total attiré au début mais on me l'a conseillé à sa sortie. Aucun regret j'y joue depuis 5-6 ans avec des coupures bien sûr mais cela arrive encore quand j'ai le temps. Avec un panel d'héros à jouer (mais donc du temps à passer et à comprendre comment il fonctionne afin de tirer leurs avantages) fait penser à Tekken quand j'étais plus petit. Il est très différents dans la réalité car cela se passe sur une carte à dimension réel (4d) et avec des objectifs (prise de point, convoit) simple à comprendre mais plus complexes pour tirer profit de la victoire. \nPas simple de s'y mettre aujourd'hui en revanche car la commu à un bon niveau et même si au début on se retrouve avec des joueurs de notre niveau, il y a beaucoup de smurf (joueur expérimenté qui créait un nouveau profil et donc se retrouve avec les débutants). Les persévérants y trouveront du plaisir mais ce ne sera donc pas immédiat.\nJe pourrais m'éparpiller sur ce jeux mais vous pouvez visionnez quelques vidéos sur youtube et pourquoi pas échanger avec moi. Instagram : vaaloou11",
          "imageUrl": "https://cdn.gameleap.com/images/articles/art_qCh32EMEzC/feature/0.75x.webp",
          "location": "Esperanza",
          "snaps": 0,
          "createdDate": "2023-12-05T15:38:45.776Z",
          "id": 2
        }
      }
    ];

    findAll(): any[] {
      return this.groups;
    }

    create(group: any) {
      this.groups = [...this.groups, group];
    }
  }
