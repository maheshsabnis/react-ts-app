import axios, { AxiosResponse } from "axios";
import { ProductInfo } from "../props";

export class ProductHttpService {
    private url:string;

    constructor(){
        this.url = "https://productapiserv.azurewebsites.net";
    }

    async getProducts(): Promise<ProductInfo[]> {
        let response = await axios.get<ProductInfo[]>(`${this.url}/api/ProductsAPI`);
        return response.data;
    }

    async getProductById(id:number): Promise<ProductInfo> {
        let response = await axios.get<ProductInfo>(`${this.url}/api/ProductsAPI/${id}`);
        return response.data;
    }

    async postProduct(product:ProductInfo): Promise<ProductInfo> {
        let response = await axios.post<ProductInfo>(`${this.url}/api/ProductsAPI`, product, {
            headers: {
                'Content-Type':'application/json'
            }
        });
        return response.data;
    }

    async putProduct(id:number,product:ProductInfo): Promise<ProductInfo> {
        let response = await axios.put<ProductInfo>(`${this.url}/api/ProductsAPI/${id}`, product, {
            headers: {
                'Content-Type':'application/json'
            }
        });
        return response.data;
    }

    async deleteProduct(id:number): Promise<boolean> {
        let response = await axios.delete<boolean>(`${this.url}/api/ProductsAPI/${id}`);
        return response.data;
    }
}