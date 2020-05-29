import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is the product 1 description. The product is really kool!', 100 ),
    new Product(2, 'Product 2', 'This is the product 2 description. The product is really kool!', 200 ),
    new Product(3, 'Product 3', 'This is the product 3 description. The product is really kool!', 350 ),
    new Product(4, 'Product 4', 'This is the product 4 description. The product is really kool!', 400 ),
    new Product(5, 'Product 5', 'This is the product 5 description. The product is really kool!', 250 ),
    new Product(6, 'Product 6', 'This is the product 6 description. The product is really kool!', 350 ),
    new Product(7, 'Product 7', 'This is the product 7 description. The product is really kool!', 500 ),
    new Product(8, 'Product 8', 'This is the product 8 description. The product is really kool!', 1500 )
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

}
