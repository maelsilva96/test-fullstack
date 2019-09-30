import { Component, OnInit } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {NotificationService} from '../../notification/notification.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  public evaluation = 1;
  public messageError = '';
  public messageSuccess = '';
  public buttonDisabled = false;
  private readonly typeImagesValid = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  public readonly faArrowLeft = faArrowLeft;
  private readonly id: number;
  public product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private notification: NotificationService) {
    this.id = this.route.snapshot.params.id;
    this.productService.get(this.id).subscribe((item) => {
      this.product = item.product;
    }, (error) => {
      this.messageSuccess = '';
      this.messageError = error.error.message;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formValid(this.product)) {
      this.messageError = '';
      this.buttonDisabled = true;
      this.productService.update(
        this.product.id, this.product.name, this.product.description,
        this.product.image, this.product.evaluation
      ).subscribe(() => {
        this.messageError = '';
        this.messageSuccess = 'Salvo com sucesso!';
        this.buttonDisabled = false;
        this.notification.pushNotificationBlank();
      }, (error) => {
        this.messageSuccess = '';
        this.buttonDisabled = false;
        this.messageError = error.error.message;
      });
    }
  }

  onSaveImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const photo = event.target.files[0];
      if (this.imageValid(photo)) {
        const formData = new FormData();
        this.buttonDisabled = true;
        formData.append('image', photo);
        this.productService.sendImage(formData).subscribe((item) => {
          this.buttonDisabled = false;
          this.setImage(item.headers.get('image'));
          this.messageError = '';
        }, (error) => {
          this.buttonDisabled = false;
          this.messageSuccess = '';
          this.messageError = error.error.message;
        });
      } else {
        this.messageSuccess = '';
        this.messageError = 'Imagem inválida!';
      }
    }
  }

  private setImage(url: string) {
    this.product.image = url;
  }

  private imageValid(image: File): boolean {
    return (this.typeImagesValid.indexOf(image.type) > -1);
  }

  private formValid(value): boolean {
    if (value.id === '' || value.id === undefined || value.id <= 0) {
      this.messageError = 'Identificador inválido!';
      return false;
    } else if (value.name === '' || value.name === undefined) {
      this.messageError = 'Nome inválido!';
      return false;
    } else if (value.description === '' || value.description === undefined) {
      this.messageError = 'Descrição inválido!';
      return false;
    } else if (value.image === '' || value.image === undefined) {
      this.messageError = 'Imagem inválida!';
      return false;
    } else if (this.evaluation < 1 || value.evaluation > 5) {
      this.messageError = 'Avaliação inválida!';
      return false;
    }
    return true;
  }

}
