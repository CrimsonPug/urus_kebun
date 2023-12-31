import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput', { static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false}) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {

  }

  ngOnInit(): void {
    
  }

  onAdditem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.slService.onIngredientAdded(newIngredient)
  }

}
