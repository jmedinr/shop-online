import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/products';
import { SelectItem } from 'primeng/api';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
/**
 * ListComponent: List all products
 */
export class ListComponent implements OnInit {
  products: Product[] = [];

  sortOptions!: SelectItem[];

  sortOrder: number = 0;

  sortField: string = '';

  sortKey!: string;

  constructor(private productsService: ProductsService) {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((data: any[]) => (this.products = data));
  }

  onSortChange(event: { value: any; }) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
