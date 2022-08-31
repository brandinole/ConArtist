import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() selected: boolean | undefined;
  @Output() selectedChange = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {}

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    console.log(this.selected);
  }

}
