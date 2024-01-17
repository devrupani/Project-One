import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Not", 5),
    new Ingredient("Banana", 11)
  ];
}
