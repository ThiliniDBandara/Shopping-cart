import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    /* {id: 1, productId: 3, productname: 'Test 1', qty: 2, price:350},
    {id: 2, productId: 1, productname: 'Test 3', qty: 2, price:100},
    {id: 3, productId: 4, productname: 'Test 4', qty: 2, price:300},
    {id: 4, productId: 2, productname: 'Test 2', qty: 2, price:50} */
  ]
  cartTotal = 0
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe( (product: Product) => {
      this.addProductToCart(product)
    })
  }
addProductToCart( product : Product){

  let productExists = false

  for(let i in this.cartItems) {
    if(this.cartItems[i].productId === product.id) {
      this.cartItems[i].qty++
      productExists = true
      break;
    }
  }
  if(!productExists) {
    this.cartItems.push({
      productId: product.id,
      productname: product.name,
      qty: 1,
      price: product.price
    })
  }
  
this.cartTotal = 0
this.cartItems.forEach(item => {
  this.cartTotal += (item.qty * item.price)
});
}
}
