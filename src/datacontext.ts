import { createContext } from "react";
import { Product } from "./props";
export const DataContext = createContext({});

interface DataContextInterface {
    [x:string]:any,
    products: Array<any> //| null | undefined;
    setProduct: React.Dispatch<React.SetStateAction<Product>> | null
  }


export const DataContextEvent = createContext<DataContextInterface>({
    products:[],  
    setProduct:null
});

 