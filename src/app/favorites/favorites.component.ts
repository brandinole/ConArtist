import { Component, OnInit } from '@angular/core';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class Favorites implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public isFavorited: boolean = true;
  toggleIsFavorited() {
    this.isFavorited = !this.isFavorited;
  }
}
