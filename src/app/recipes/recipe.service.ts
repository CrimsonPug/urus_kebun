import { Injectable } from '@angular/core';
import { Recipe } from './recepi.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Nasi Lemak',
            'My fav ❤️',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Nasi_lemak_on_banana_leaf.jpg/1600px-Nasi_lemak_on_banana_leaf.jpg?20211002031005',
            [
                new Ingredient('rice', 1)
            ]
        ),
        new Recipe(
            'Nasi Kerabu',
            'Best food ever',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Nasi_kerabu.jpg/800px-Nasi_kerabu.jpg',
            [
                new Ingredient('rice', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}