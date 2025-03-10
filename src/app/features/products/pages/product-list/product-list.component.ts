import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../../models/product';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [CommonModule , FormsModule, HttpClientModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm = '';
  itemsPerPage = 10;
  searchQuery : string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      console.log('Productos cargados:', products);
      this.products = products;
      this.filteredProducts = products;
    });
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter(p =>
      p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  updatePagination(): void {
    // Lógica de paginación 
  }

  trackById(index: number, product: Product): string {
    return product.id;
  }

  editProduct(product: Product): void {
    console.log('Edit product:', product);
    //this.router.navigate(['/product/edit', product.id]);
    this.productsService.updateProduct(product.id, product).subscribe(products => {
      console.log('Productos cargados:', products);
      this.loadProducts();
    });
  }

  deleteProduct(productId: string): void {
    console.log('Delete product with ID:', productId);
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct(productId).subscribe(() => {
        alert('Product deleted successfully');
        this.loadProducts();
      }, error => {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
      });
    }
  }
}
