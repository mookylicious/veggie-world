import { Component, OnInit } from '@angular/core';
// c'est grâce au formBuilder que l'on créé les formGroup
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

import { Ingredient, Recipe } from './../data-model';
import { FormRecipePipe } from './../pipes/form-recipe.pipe';
import { RecipesService } from './../services/recipes.service';

@Component({
  selector: 'app-vw-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.css']
})
export class RecipeAddFormComponent implements OnInit {

  /*************** REACTIVE FORM ***************/
  recipeForm: FormGroup;

  recipe: Recipe;

  mealTypes = [
    { id: 1, name: 'Entrée', value: 'starter' },
    { id: 2, name: 'Plat', value: 'main-course' },
    { id: 3, name: 'Dessert', value: 'dessert' },
    { id: 4, name: 'Fromage', value: 'cheese' }
  ];

  diffLevels = [
    { id: 1, name: 'Facile', value: 'easy' },
    { id: 2, name: 'Moyen', value: 'medium' },
    { id: 3, name: 'Difficile', value: 'hard' },
    { id: 3, name: 'Expert', value: 'chief' }
  ];

  ingOptions = [
    { id: 1, name: 'coulis' },
    { id: 2, name: 'jus ' },
    { id: 3, name: 'pulpe' },
    { id: 4, name: 'purée' }
  ];

  ingSpec = [
    { id: 1, name: '3 couleurs' },
    { id: 2, name: 'au blé dur' },
    { id: 3, name: 'blanc(s)' },
    { id: 4, name: 'blanche(s)' },
    { id: 5, name: 'complet(s)' },
    { id: 6, name: 'complète(s)' },
    { id: 7, name: 'confit(es)' },
    { id: 8, name: 'demi complet(s)' },
    { id: 9, name: 'demi complète(s)' },
    { id: 10, name: 'deshydraté(es)' },
    { id: 11, name: 'pelé(es)' },
    { id: 12, name: 'rapé(es)' },
    { id: 13, name: 'seché(es)' }
  ];

  ingCat = [
    {id: 1, name: 'fruits, légumes et légumineux', value: 1},
    {id: 2, name: 'divers', value: 2},
    {id: 3, name: 'fromages', value: 3},
    {id: 4, name: 'alcool', value: 4}
  ]

  unitsOfMeasure = [
    { id: 1, name: 'milligramme(s)', value: 'mg' },
    { id: 2, name: 'gramme(s)', value: 'g' },
    { id: 3, name: 'kilogramme(s)', value: 'kg' },
    { id: 4, name: 'tasse(s)', value: 'tasse(s)' },
    { id: 5, name: 'millilitre(s)', value: 'ml' },
    { id: 6, name: 'centilitre(s)', value: 'cl' },
    { id: 7, name: 'décilitre(s)', value: 'dl' },
    { id: 8, name: 'litre(s)', value: 'l' },
    { id: 9, name: 'cuillère(s) à café', value: 'cuillère(s) à café' },
    { id: 10, name: 'cuillère(s) à soupe', value: 'cuillère(s) à soupe' }
  ];

  constructor(private formBuilder: FormBuilder, private _recipesService: RecipesService) { }  // Injection du formBuilder


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.recipeForm = this.formBuilder.group({  // <-- Parent FormGroup : Récup de ce que créé le formBuilder ac sa méthode group
      id: -1,
      title: ['', Validators.required],
      publishDate: new Date(),
      mealType: '',
      diffLevel: '',
      prepDurationHour: '',
      prepDurationMin: '',
      cookDurationHour: '',
      cookDurationMin: '',
      standingTimeHour: '',
      standingTimeMin: '',
      servings: '',
      author: '',
      ingredients: this.formBuilder.group(new Ingredient()),  // <-- a FormGroup with a new ingredient
      directions: '',
    });

    // this.recipeForm.setValue({
    //   ingredients: this.recipe.ingredients[0] || new Ingredient()
    // });
  }

  createRecipe(recipeData) {
    this._recipesService.addRecipe(recipeData);
  }

  createIngredientForm() {
    // (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl());
  }

  addIngredientToIngredientsList() {

  }

}
