import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    {id: 1, productId: 3, productname: 'Test 1', qty: 2, price:350},
    {id: 2, productId: 1, productname: 'Test 3', qty: 2, price:100},
    {id: 3, productId: 4, productname: 'Test 4', qty: 2, price:300},
    {id: 4, productId: 2, productname: 'Test 2', qty: 2, price:50}
  ]
  cartTotal = 0
  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    });
  }

}
