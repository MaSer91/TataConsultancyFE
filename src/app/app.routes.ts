import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/pages/product-list/product-list.component'; // Adjust path

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent, // Example component to load initially
  },
  // Add other routes as necessary
];
