import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductsService} from '../../services/products/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(
    public productsService: ProductsService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(newProduct) {
    // console.log(newProduct.value);
    this.productsService.addNewProduct(newProduct.value).subscribe(
      data => {
        console.log('ok', data);
        this.router.navigate(['/list']);
      }, error => {
        console.log(error);
      }
    );
  }

}
