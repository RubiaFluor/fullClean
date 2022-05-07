import { IProductScanner } from './../../interfaces/sales-response';
import { Component, OnInit } from '@angular/core';
import { SalesViewService } from 'src/app/services/sales.services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IField, ISale } from 'src/app/interfaces/sales-response';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { ModalCommonComponent } from 'src/app/common/modal-common/modal-common.component';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-sales-seller-view',
  templateUrl: './sales-seller-view.component.html',
  styleUrls: ['./sales-seller-view.component.scss'],
})
export class SalesSellerViewComponent implements OnInit {
  public allProducts: any;
  public barcode: string = '';
  public findProduct: any;
  public addProductScanner: any;
  public totalProductQty: any;
  public qty: any;
  public barscanner: number;
  public summaryProduct: any;
  public notFoundProduct: boolean;
  public productsAdd: any;
  public listData: any;
  public columns: any;
  public inlineForm!: FormGroup;
  public inlineIdx!: number;
  public displayedColumns: any;
  public totalPrice: number;
  public totalIVA: number;
  public totalNETO: number;
  public isDisabled: boolean;

  public editCache: { [key: string]: { edit: boolean; data: any } } = {};

  constructor(
    private _salesServices: SalesViewService,
    private _modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.totalProductQty = [];
    this.summaryProduct = [];
    this.qty = 0;
    this.barscanner = 1;
    this.notFoundProduct = false;
    this.productsAdd = [];
    this.addProductScanner = [];
    this.displayedColumns = ['code', 'name', 'price', 'quantity'];
    this.totalPrice = 0;
    this.totalIVA = 0;
    this.totalNETO = 0;
    this.isDisabled = true;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this._salesServices.getAllProducts().subscribe((data: any) => {
      this.allProducts = data;
      console.log(this.allProducts);
    });
  }

  public quantityProduct(event: any, element: any): void {
    this.qty = event;
    for (const item of this.addProductScanner) {
      const prod = {
        productsId: item.id,
        quantityProduct: this.qty,
      };

      this.productsAdd.push(prod);
      console.log(this.productsAdd);
    }
  }

  public onKey(event: any) {
    this.isDisabled = false;
    this.barcode = event.target.value;
    this.allProducts.find((f: any) => {
      if (f.codproduct === this.barcode) {
        this.notFoundProduct = false;
        this.findProduct = {
          id: f.id,
          code: f.codproduct,
          name: f.nameproduct,
          price: f.price,
          quantity: 1,
        };

        this.addProductScanner.push(this.findProduct);
        console.log(this.addProductScanner);

        const newData = [...this.addProductScanner];
        this.listData = newData;
        this.columns = Object.keys(this.listData[0]);

        this.updateEditCache();

        const arrayPrices = this.addProductScanner.map((f: any) => f.price);
        const initialValue = 0;
        this.totalPrice = arrayPrices.reduce(
          (previousValue: any, currentValue: any) =>
            previousValue + currentValue,
          initialValue
        );

        this.totalNETO = Math.round(this.totalPrice / 1.19);
        this.totalIVA = Math.round(this.totalPrice - this.totalNETO);
      } else {
        this.notFoundProduct = true;
      }
    });
  }

  public payProducts(): void {
    const params: ISale = {
      dateSale: new Date(),
      totalPrice: this.totalPrice,
      products: this.productsAdd,
    };

    console.log('params', params);
    this.summaryProduct.push(params);

    const componentRef = this._modalService.open(ModalCommonComponent);
    componentRef.componentInstance.options = 'Seleccione Metodo Pago';
    componentRef.componentInstance.isVisible = true;
    componentRef.componentInstance.action.subscribe((action: any) => {
      if (action) {
        const addSale = this._salesServices.addSale(params).subscribe();
        if (addSale) {
          // restar cantidad de productos del stockStore
        }
      }
    });
  }

  public cancel(): void {}

  public EditPrice(item: any) {
    this.editCache[item].edit = true;
    console.log(item);
  }

  updateEditCache(): void {
    this.listData.forEach((item: any) => {
      console.log(item);
      this.editCache[item.quantity] = {
        edit: false,
        data: { ...item },
      };
      console.log(this.editCache);
    });
  }

  public saveEdit(quantity: any): void {
    console.log(quantity);
    console.log(this.listData);
    console.log(this.editCache);
    const index = this.listData.findIndex(
      (item: any) => item.quantity === quantity
    );
    Object.assign(this.listData[index], this.editCache[quantity].data.quantity);
    this.editCache[quantity].edit = false;
  }
}
