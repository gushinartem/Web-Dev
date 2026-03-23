import { Component , input, signal, output} from '@angular/core';
import {Product} from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  remove = output<number>();
  isLiked = signal(false);
  round(): number{
    return Math.floor(this.product().rating);
  }
  getTelegramLink(): string {
    let url = encodeURIComponent(this.product().link);
    let text = encodeURIComponent(this.product().name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
  like(){
    if(this.isLiked() != true){
      this.product().likes++;
    }
    else{
      this.product().likes--;
    }
    this.isLiked.update(v => !v);
  }
  removeCard(){
    this.remove.emit(this.product().id);
  }
}
