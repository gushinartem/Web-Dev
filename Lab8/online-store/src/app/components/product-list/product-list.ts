import { ChangeDetectorRef, Component,inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product.model";
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category';
import { ProductService } from '../../services/products';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  cdr = inject(ChangeDetectorRef);
  route = inject(ActivatedRoute);
  catId = Number(this.route.snapshot.paramMap.get('id'));
  catService = inject(CategoryService);
  productService = inject(ProductService);
  cat = this.catService.getCatById(this.catId);
  items = Array.from({length:10});
  ngOnInit() {
    // Изначально берём продукты (они пока пустые)
    this.products = this.productService.getProductsByCatId(this.catId);
    this.isEmpty = this.products.length <= 0;

    // Проверяем через 1 секунду (или несколько)
    const checkProducts = () => {
      this.products = this.productService.getProductsByCatId(this.catId);
      this.isEmpty = this.products.length <= 0;
      this.cdr.detectChanges();
      if(this.isEmpty) {
        // если все еще пусто, пробуем снова через секунду
        setTimeout(checkProducts, 1000);
      }
    };

    setTimeout(checkProducts, 1000); // первая проверка через 1 секунду
  }
  trackById(index: number, product: Product): number {
    return product.id;
  }
  products: Product[] = this.productService.getProductsByCatId(this.catId);
  isEmpty: boolean = (this.products.length <= 0) ? true : false;
  removeProduct(id: number){
    if(confirm("Вы действительно хотите удалить эту карточку ?") != true){
      return;
    }
    this.productService.delCard(id);
    this.products = this.products.filter(p => p.id != id);
    if(this.products.length <= 0){
      this.isEmpty = true;
    }
  }
}
