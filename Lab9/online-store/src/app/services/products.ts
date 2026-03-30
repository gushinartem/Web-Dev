import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts: Product[] = []
  apiUrl = "http://127.0.0.1:8000/api/products/"
  constructor(private http: HttpClient){
    this.loadProducts();
  }
  private loadProducts(){
    this.http.get<Product[]>(this.apiUrl).subscribe(data =>{
      this.allProducts = data
    });
  }
  getProductsByCatId(id: number) : Product[]{
    return this.allProducts.filter(p => p.category == id && p.isDel != true);
  }
  delCard(id: number){
    const pr = this.allProducts.find(p => p.id == id);
    if(pr){
      pr.isDel = true;
    }
  }
}
