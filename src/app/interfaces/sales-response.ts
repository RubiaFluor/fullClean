export interface IResponseError {
  errorNumber: number;
  errorCode: number;
  description: string;
}

export interface IFindProduct {
  codproduct: string;
  detailproduct: string;
  id: number;
  nameproduct: string;
  price: number;
  stockstore: number;
  stockwarehouse: number;
}

export interface ISale {
  dateSale: Date;
  totalPrice: number;
  products: ISaleProduct[];
  // codproduct: string;
  // detailproduct: string;
  // nameproduct:string;
  // price: number;
  // quantity: number;
}
export interface ISaleProduct {
  productsId: number;
  quantityProduct: number;
}

export interface IProductScanner {
  code: string;
  detail: string;
  id: number;
  name: string;
  price: number;
  stockStore: number;
  stockWarehouse: number;
}


export interface IField {
  code: string;
  name: string;
  price: string;
  quantity: number;
}
