import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private products: [];

  p = 1;
  // collection: any[] = someArrayOfThings;

  constructor(
    public productsService: ProductsService,
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.productsService.getAllProducts().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      },
       error => {
        console.log(error);
      }
    );
  }

  editProduct(product) {
    this.productsService.selectedProduct = product;
    this.router.navigate(['/editProduct']);
  }
}
