import { Component, OnInit } from '@angular/core';
import { SalesViewService } from 'src/app/services/sales.services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCommonComponent } from 'src/app/common/modal-common/modal-common.component';

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
  public totalProductQty: number;
  public qty: any;
  public barscanner: number;
  public summaryProduct: any;

  constructor(
    private salesServices: SalesViewService,
    private _modalService: NgbModal
  ) {
    this.addProductScanner = [];
    this.totalProductQty = 0;
    this.summaryProduct = [];
    this.qty = 0;
    this.barscanner = 1;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.salesServices.getAllProducts().subscribe((data: any) => {
      this.allProducts = data;
      console.log(this.allProducts);
    });
  }

  public getProductScanner(barcode: string): void {
    const findProduct = this.allProducts.find(
      (f: any) => f.codproduct === barcode
    );

    if (barcode) {
      this.addProductScanner.push(findProduct);
      console.log(this.addProductScanner);
      this.getamountProduct();
    }
  }

  public getamountProduct() {
    if (this.addProductScanner) {
      this.totalProductQty = this.addProductScanner
        .map((t: any) => t.price)
        .reduce((a: any, value: any) => a + value, 0);
    }
    return 0;
  }
  public quantityProduct(event: any): void {
    this.qty = event.target.value;
    this.getamountProduct();
  }
  public onKey(event: any) {
    this.barcode = event.target.value;
    this.getProductScanner(this.barcode);
  }

  public payProductsSummary(): void {
    console.log(this.addProductScanner);
    const numberSale = 345;
    const summarySale = {
      title: `Resumen Venta ${numberSale}`,
      nameProduct: this.addProductScanner[0].nameproduct,
      detailProduct: this.addProductScanner[0].detailproduct,
    };
    console.log(summarySale);

    const modalSummary = this._modalService.open(ModalCommonComponent);
    modalSummary.componentInstance.options = summarySale;
    modalSummary.componentInstance.modalType = 'Summary';
    modalSummary.componentInstance.acceptPay.subscribe((result: boolean) => {
      console.log(result);
      if (result) {
        // const optionsModal = {
        //   title: 'Seleccione Metodo de pago',
        //   payOption: {
        //     cash:'Efectivo',
        //     card:'Tarjeta de crédito o débito'
        //   }
        // }
        // const modalCommon = this._modalService.open(ModalCommonComponent);
        // modalCommon.componentInstance.options = optionsModal;
        // modalSummary.componentInstance.modalType = 'Pay';
      }
    });
  }
}
