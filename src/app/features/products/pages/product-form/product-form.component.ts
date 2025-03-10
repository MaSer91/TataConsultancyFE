import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductsService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      releaseDate: ['', [Validators.required]],
      reviewDate: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(() => {
        alert('Producto agregado con éxito');
      });
    }
  }
}
