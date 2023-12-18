import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
    games : any[] = [
        {
            
                "title": "Overwatch",
                "description": "Il est dans mon Top 3 de mes jeux préférés (je n'ai pas de top1 car cela dépends de mes humeurs et des périodes) \n\nJeux en Free to Play depuis à peine deux ans que j'ai connu et acheté à l'époque. L'univers coloré et les combats en 5vs5 m'ont pas total attiré au début mais on me l'a conseillé à sa sorti. Aucun regret j'y joue depuis 5-6 ans avec des coupures bien sûr mais cela arrive encore quand j'ai le temps. Avec un panel d'héros à jouer (mais donc du temps à passer et à comprendre comment il fonctionne afin de tirer leurs avantages) fait penser à Tekken quand j'était plus petit. Il est très différents dans la réalité car cela se passe sur une carte à dimension réel (4d) et avec des objectifs (prise de point, convoit) simple  à comprendre mais plus complexes pour tirer profit de la victoire. \nPas simple de s'y mettre aujourd'hui en revanche car la comu à un bon niveau et même si au début on se retrouve avec des joueurs de notre niveau, il y a beaucoup de smurf (joueur expérimenté qui créait un nouveau profil et donc se retrouve avec les débutants). Les persévérants y trouveront du plaisir mais ce ne sera donc pas immédiat.\nJe pourrais m'éparpiller sur ce jeux mais vous pouvez visionnez quelque vidéos sur youtube et pourquoi pas échanger avec moi. Instagram : vaaloou11",
                "imageUrl": "https://cdn.gameleap.com/images/articles/art_qCh32EMEzC/feature/0.75x.webp",
                "location": "Esperanza",
                "snaps": 0,
                "createdDate": "2023-12-05T15:38:45.776Z",
                "id": 1
              
          }
      ];
  
      findOne(id: string) {
        return this.games.find(game => game.id === Number(id))
      }
  
      findAll(): any[] {
        return this.games;
      }
  
      create(game: any) {
        this.games = [...this.games, game];
      }
}
