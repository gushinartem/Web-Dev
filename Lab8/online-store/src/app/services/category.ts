import { Injectable} from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = "http://127.0.0.1:8000/api/categories"
  categories:  Category[] = []
  constructor(private http: HttpClient) {
    this.loadCategories();
  }

  private loadCategories() {
    this.http.get<Category[]>(this.apiUrl).subscribe(data => {
      this.categories = data;
    });
  }
  getCategories() : Category[]{
    return this.categories;
  }
  getCatById(id: number) : Category | undefined{
    return this.categories.find(c => c.id == id);
  }
}
