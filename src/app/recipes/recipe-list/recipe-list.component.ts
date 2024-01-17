import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Abc","this is recipe from Recipe Modal","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDd92rfM8vAljBlquu7xYsOoywAlK7jqW0fw&usqp=CAU"),
    new Recipe("Abc","this is recipe from Recipe Modal","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDd92rfM8vAljBlquu7xYsOoywAlK7jqW0fw&usqp=CAU")
 
  ] 


  constructor(){}
  ngOnInit(){

  }


}
