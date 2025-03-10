import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../../../models/product';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;
  const mockProduct: Product = { id: '123', nombre: 'Test', descripcion: 'Test Desc', logo:'Logo', fechaLiberacion: new Date(), fechaRevision: new Date() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch products', () => {
    service.getProducts().subscribe(products => {
      expect(products.length).toBe(1);
      expect(products[0].nombre).toBe('Test');
    });

    const req = httpMock.expectOne('http://localhost:3002/bp/products');
    expect(req.request.method).toBe('GET');
    req.flush([mockProduct]);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
