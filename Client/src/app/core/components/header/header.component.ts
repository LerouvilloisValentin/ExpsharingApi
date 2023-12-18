import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (private router : Router) {

  }
  ngOnInit(): void {

  }

  onAddNewFaceSnap(): void {
    const currentUrl = this.router.url
    if(currentUrl === "/destinations"){
      this.router.navigateByUrl("destinations/create")
    } else if (currentUrl === "/culinaires") {
      this.router.navigateByUrl("culinaires/create")
    }else if (currentUrl === "/games") {
      this.router.navigateByUrl("games/create")
    }
  }

  isFaceSnapRoute(): boolean {
    return this.router.url === '/destinations' || this.router.url === '/culinaires' || this.router.url === '/games'  ;
  }
}
