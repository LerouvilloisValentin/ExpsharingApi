import { Injectable } from '@nestjs/common';

@Injectable()
export class CulinairesService {
    culinaires : any[] = [
        {
            "title": "Koréan street food ",
            "description": "Première fois que je mangeais coréen et à cette occasion c'était au \"Chikin bang x Xing fu Tang\" au Cordeliers à Lyon. \n\nLe style très atypique est attirant et sympa. Le couloir en entrant est la réplique d'une rue et la déco est lumineuse et agréable. \n\nC'est convivial pour partager différent plats  et gouté pleins de choses. Au niveau Gout le poulet au top, un tapas peut être trop pimenté mais ce que j'ai adoré c'est les Guabos.",
            "imageUrl": "https://1.bp.blogspot.com/-X2ltoSzR0vQ/XVTDzwj_XGI/AAAAAAAAKCo/HD1rVb7xMWULf2CfYJlONT0iXNon9FM7ACLcBGAs/s1600/Korean%2BStreet%2BFood.jpg",
            "location": "Lyon ",
            "snaps": 0,
            "createdDate": "2023-12-05T14:40:49.384Z",
            "id": 1
          }
      ];
  
      findOne(id: string) {
        return this.culinaires.find(culinaire => culinaire.id === Number(id))
      }
  
      findAll(): any[] {
        return this.culinaires;
      }
  
      create(culinaire: any[]) {
        this.culinaires = [...this.culinaires, culinaire];
      }
}
