import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductsService} from '../../services/products/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editedProduct = new FormGroup({
    name: new FormControl(this.productService.selectedProduct.name),
    description: new FormControl(this.productService.selectedProduct.description),
    price: new FormControl(this.productService.selectedProduct.price),
  });

  constructor(
    public productService: ProductsService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(editedProduct) {
    console.log(editedProduct.value);
    this.productService.editProduct(editedProduct.value, this.productService.selectedProduct.id).subscribe(
      data => {
        console.log('ok', data);
        this.router.navigate(['/list']);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteProduct() {
    this.productService.deleteProduct(this.productService.selectedProduct.id).subscribe(
      data => {
        console.log('ok', data);
        this.router.navigate(['/list']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
