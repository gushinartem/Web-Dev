import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from "./components/header/header";
import {ProductList} from "./components/product-list/product-list";
import {Footer} from "./components/footer/footer";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,ProductList,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('online-store');
}
