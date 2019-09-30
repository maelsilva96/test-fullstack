import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {ProductService} from '../product.service';
import {NotificationService} from '../../notification/notification.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  evaluation = 1;
  messageError = '';
  imageUrl = 'assets/image.svg';
  private imageSaveUrl: string;
  private readonly typeImagesValid = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

  constructor(private productService: ProductService, private route: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {value} = form;
    if (this.formValid(value)) {
      this.messageError = '';
      this.productService.save(value.name, value.description, this.imageSaveUrl, this.evaluation).subscribe((item) => {
        this.route.navigateByUrl('/');
      }, (error) => {
        this.messageError = error.error.message;
      });
    }
  }

  onSaveImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const photo = event.target.files[0];
      if (this.imageValid(photo)) {
        const formData = new FormData();
        formData.append('image', photo);
        this.productService.sendImage(formData).subscribe((item) => {
          this.setImage(item.headers.get('image'));
        }, (error) => {
          this.messageError = error.error.message;
        });
      } else {
        this.messageError = 'Imagem inválida!';
      }
    }
  }

  private setImage(url: string) {
    this.imageUrl = url;
    this.imageSaveUrl = url;
  }

  private imageValid(image: File): boolean {
    return (this.typeImagesValid.indexOf(image.type) > -1);
  }

  private formValid(value): boolean {
    if (value.name === '' || value.name === undefined) {
      this.messageError = 'Nome inválido!';
      return false;
    } else if (value.description === '' || value.description === undefined) {
      this.messageError = 'Descrição inválido!';
      return false;
    } else if (this.imageSaveUrl === '' || this.imageSaveUrl === undefined) {
      this.messageError = 'Imagem inválida!';
      return false;
    } else if (this.evaluation < 1 || value.evaluation > 5) {
      this.messageError = 'Avaliação inválida!';
      return false;
    }
    return true;
  }
}
