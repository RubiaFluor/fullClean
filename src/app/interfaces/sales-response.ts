export interface IResponseError {
  errorNumber: number;
  errorCode: number;
  description: string;
}

export interface IFindProduct{
  codproduct: string;
  detailproduct: string;
  id: number;
  nameproduct: string;
  price: number;
  stockstore: number;
  stockwarehouse: number;
}
