import { Component ,input} from '@angular/core';
import { Category } from '../../models/category.model';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-category-card',
  imports: [RouterLink],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
})
export class CategoryCard { 
  cat = input.required<Category>();
}
