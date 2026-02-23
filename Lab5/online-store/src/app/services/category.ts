import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories:  Category[] =  [
    {
      id:1,
      category:"Смартфоны",
      image:"assets/categories/catPhones.png",
    },
    {
      id:2,
      category:"Аксессуары",
      image:"assets/categories/accessories.png"
    },
    {
      id:3,
      category:"Книги",
      image:"assets/categories/catBooks.jpg",
    },
    {
      id:4,
      category:"Акссесуары для зарядки",
      image: "assets/categories/chargeAccessories.jpg",
    },
  ]
  getCategories() : Category[]{
    return this.categories;
  }
  getCatById(id: number) : Category | undefined{
    return this.categories.find(c => c.id == id);
  }
}
