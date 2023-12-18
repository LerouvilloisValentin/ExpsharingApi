import { Injectable } from '@nestjs/common';

@Injectable()
export class CulinairesService {
    culinaires : any[] = [
        {
            title: "Praha - Czech Republic",
            description: "Prague en République Tchèque est une ville que j'ai adoré surtout grâce à son architecture qui a réussi à me faire pensé à l'Espagne à certain moment. Il y a beaucoup de monument à visité et une place pleine de vie, très agréable toutes les fois où je m'y susi rendu (old town). Le pont Charles et le chateau de Prague -->Top.\n\n En été les chaleurs ne sont pas écrasante et c'est peut être aussi dû à une pollution plus faible.\n\nIl y a principalement des pavés pas facile de se déplacé tout le temps en trottinette mais ça reste super pour visité cette grande ville. Je suis aller visiter la plus ancienne des bibliothèques et l'ai apprécié pour la parti de celle-ci qui est toute orné et spectaculaire et aussi pour la visite de son sommet permettant de voir Pragues à 360 degrés.\n\nNiveaux sympathie des habitants dure d'en juger très peu de Tchèque parler Anglais, c'était d'ailleurs compliqué de se faire comprendre.",
            imageUrl: "https://getsready.com/wp-content/uploads/2017/02/best-scenery-at-prague-696x435.jpg",
            location: "Pragues",
            snaps: 14,
            createdDate: "2023-12-05T15:05:15.690Z",
            id: 1
          
        },
        {
          title: "Les îles Canaries - Gran Canaria",
          description: "Belle destination en terme de soleil. Je suis allé à Las Palmas une première semaine. C'est la grande ville de l'île. Très beau longue plage pour faire de la planche. Mais cette ville à ces limites et je ne serais pas rester plus longtemps en comparaison à Maspalomas dans le sud de l'iles qui est plus petite mais plus touristique et sympa à visiter. Vous y trouverez plus d'activité intéressante en partant de cette ville telle que des visites d'ancien village abandonné dû au volcan et la visite de ces derniers. Très belle îles je recommande.",
          imageUrl: "https://cdn.holidayguru.nl/wp-content/uploads/2017/11/Amadores-beach-Gran-Canaria-Spain-Spanien-iStock_000017333252_Large-Copy.jpg",
          location: "Gran Canaria",
          snaps: 10,
          createdDate: "2023-12-05T15:05:15.690Z",
          id: 2
        
      }
      ];
  
      findOne(id: string) {
        return this.culinaires.find(culinaire => culinaire.id === Number(id))
      }
  
      findAll(): any[] {
        return this.culinaires;
      }
  
      create(culinaire: any) {
        this.culinaires = [...this.culinaires, culinaire];
      }
}
