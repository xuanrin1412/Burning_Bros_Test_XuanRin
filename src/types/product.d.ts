export interface IProduct {
    id?: string;
    title: string;
    price: number
    images: string[]
}
export interface IProductResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}