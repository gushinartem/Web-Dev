import { Component } from '@angular/core';
import {Product} from "../../models/product.model";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  items = Array.from({length:10});
  round(value:number): number{
    return Math.floor(value);
  }
  getTelegramLink(item: any): string {
    let url = encodeURIComponent(item.link);
    let text = encodeURIComponent(item.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
  products: Product[] = [
    {
      id:1,
      name:"Чехол для Apple iPhone 13 прозрачный",
      description:"Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений.",
      price:97,
      rating:5,
      image:"https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium",
      images:[],
      link:"https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000",
    },
    {
      id:2,
      name:"Чехол для Apple iPhone 13 прозрачный",
      description:"USB кабель Apple Type - C to Type - C VARIUM VTT03.",
      price:1950,
      rating:4.8,
      image:"https://resources.cdn-kaspi.kz/img/m/p/pc0/p33/58883993.jpg?format=preview-large",
      images:[],
      link:"https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000",
    },
    {
      id:3,
      name:"Apple Watch Magnetic Charger Cable USB-C 1 м",
      description:"Это полностью закрытая система без внешних контактов",
      price:14999,
      rating:3.2,
      image:"https://resources.cdn-kaspi.kz/img/m/p/hd8/h96/64229380620318.jpg?format=gallery-medium",
      images:[],
      link:"https://kaspi.kz/shop/p/apple-watch-magnetic-charger-cable-usb-c-1-m-102654841/?c=750000000",
    },
    {
      id:4,
      name:"Чехол для Samsung Galaxy A54 сиреневый",
      description:"Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты.",
      price:4486,
      rating:5,
      image:"https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large",
      images:[],
      link:"https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
    },
    {
      id:5,
      name:"Смартфон Apple iPhone 16 128Gb черный",
      description:"Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.",
      price:448845,
      rating:4.5,
      image:"https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium",
      images:[],
      link:"http://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000",
    },
    {
      id:6,
      name:"Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч",
      description:"Xiaomi Redmi Power Bank 20000 мАч выполнен в прочном пластиковом корпусе прямоугольной формы",
      price:4277,
      rating:3.5,
      image:"https://resources.cdn-kaspi.kz/img/m/p/h34/h07/63928978014238.jpg?format=gallery-medium",
      images:[],
      link:"https://kaspi.kz/shop/p/vneshnii-akkumuljator-xiaomi-redmi-power-bank-20000-mach-18-vt-chernyi-100322086/?c=750000000",
    },
    {
      id:7,
      name:"Смарт-часы YAMI i1 42 мм золотистый",
      description:"Смарт часы YAMI i1 - это инновационный гаджет, который объединяет в себе функции умных часов и фитнес браслета. ",
      price:19990,
      rating:2,
      image:"https://resources.cdn-kaspi.kz/img/m/p/p51/pd4/9015777.jpg?format=gallery-medium",
      images:[],
      link:"https://kaspi.kz/shop/p/yami-i1-42-mm-zolotistyi-zolotistyi-112674629/?c=750000000",
    },
    {
      id:8,
      name:"Магнитный держатель 007 черный",
      description:"Магнитный автомобильный держатель для телефона",
      price:600,
      rating:2,
      image:"https://resources.cdn-kaspi.kz/img/m/p/p4c/p0c/33080059.jpeg?format=gallery-medium",
      images:[],
      link:"https://kaspi.kz/shop/p/magnitnyi-derzhatel-007-chernyi-135834964/?c=750000000",
    },
    {
      id:9,
      name:"Смартфон Samsung Galaxy A56",
      description:"Samsung Galaxy A56 5G — мощный и стильный смартфон с поддержкой сетей пятого поколения",
      price:209100,
      rating:5,
      image:"https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium",
      images:[],
      link:"https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=750000000",
    },
    {
      id:10,
      name:"Кейс-органайзер Прозрачный черный",
      description:"Чёрный Чехол для зарядных устройств и шнуров, экономьте место и попрощайтесь с беспорядком,",
      price:680,
      rating:5,
      image:"https://resources.cdn-kaspi.kz/img/m/p/p76/pfa/47421164.jpg?format=gallery-medium",
      images:[],
      link:"https://kaspi.kz/shop/p/prozrachnyi-chernyi-120588192/?c=750000000",
    },
  ]
}
