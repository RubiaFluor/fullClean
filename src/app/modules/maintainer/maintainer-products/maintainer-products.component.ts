import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maintainer-products',
  templateUrl: './maintainer-products.component.html',
  styleUrls: ['./maintainer-products.component.scss']
})
export class MaintainerProductsComponent implements OnInit {
  public formMantainerProducts :FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formMantainerProducts = this.fb.group({
      codeProduct: ['', Validators.required],
      nameProduct: ['', Validators.required],
      detailProduct: ['', Validators.required],
      priceProduct: ['', Validators.required],
      stockStore: ['', Validators.required],
      stockWarehouse: ['', Validators.required]

    })
  }

}
