import { Component, inject } from '@angular/core';
import { CategoryCard } from '../category-card/category-card';
import { Category } from '../../models/category.model';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category';

@Component({
  selector: 'app-category-list',
  imports: [CategoryCard, CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  categoryService = inject(CategoryService);
  categories = this.categoryService.getCategories();
  trackById(index: number, cat: Category): number {
      return cat.id;
  }
}
