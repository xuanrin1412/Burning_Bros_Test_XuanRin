import http from "./http"
import { IProduct, IProductResponse } from "../types/product";

export const searchProducts = async (searchValue: string, limit: number, skip: number): Promise<IProduct[]> => {
    const res = await http.get<IProductResponse>(`search?q=${searchValue}&limit=${limit}&skip=${skip}`)
    return res.data.products;
}
