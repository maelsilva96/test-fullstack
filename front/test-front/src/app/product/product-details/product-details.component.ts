import {Component, OnInit} from '@angular/core';

import {faStar, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public readonly faStar = faStar;
  public readonly faArrowLeft = faArrowLeft;
  public product: Product;
  public stars = [];

  constructor(private productService: ProductService, route: ActivatedRoute, router: Router) {
    this.productService.get(route.snapshot.params.id).subscribe((item) => {
      this.product = item.product;
      for (let i = 0; i < item.product.evaluation; i++) {
        this.stars.push(i);
      }
    }, (error) => {
      router.navigateByUrl('/');
    });
  }

  ngOnInit() {
  }

}
