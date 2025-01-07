export interface IProductCard {
  _id: string;
  isMall: boolean;
  isKind: boolean;
  maxPrice: number;
  minPrice: number;
  productTitle: string;
  productImgUrl: string;
  totalSold: number;
}
