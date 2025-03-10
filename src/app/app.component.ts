import { Component } from '@angular/core';
import { ProductListComponent } from './features/products/pages/product-list/product-list.component'; // Adjust path
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../app/features/products/services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this as a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, HttpClientModule, ProductListComponent],  // Import necessary modules and components
})
export class AppComponent {
  constructor(private productsService: ProductsService) {}
}
