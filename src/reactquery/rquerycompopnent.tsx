import React from 'react'
import { ProductHttpService } from '../service/producthttpservice';

import { useQuery } from 'react-query';
import { DataContext } from '../datacontext';
import DataGridComponent from '../reusablecomponents/datagridcontextcomponent';
import { ProductInfo } from '../props';




export default function RQueryComponent() {
    const serv = new ProductHttpService();
    const getProducts=async()=>{
        const products = await serv.getProducts();
        return products;
    };

    const {data, error,isError, isLoading} = useQuery<ProductInfo[],Error>('products', getProducts);

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! {error.message}</div>
    }



  return (
    <div>
        <h1>Understanding The ReactQuery</h1>
        <DataContext.Provider value={data as ProductInfo[]}>
         <DataGridComponent></DataGridComponent>
        </DataContext.Provider>
        
    </div>
  )
}

