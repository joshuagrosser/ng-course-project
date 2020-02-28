import { Component, OnInit } from '@angular/core';
import {Recipe} from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  items: Recipe[] = [];

  constructor() {
    const recipe001 = new Recipe('Recipe 001', 'lorem ipsum sit dolor', '/images');
    const recipe002 = new Recipe('Recipe 002', 'lorem ipsum sit dolor', '/images');
    const recipe003 = new Recipe('Recipe 003', 'lorem ipsum sit dolor', '/images');
    this.items.push(recipe001);
    this.items.push(recipe002);
    this.items.push(recipe003);
  }

  ngOnInit() {
  }

}
