import React, {useEffect, useState} from 'react'
import { DataContext } from '../datacontext';
import { ProductInfo } from '../props'
import DataGridComponent from '../reusablecomponents/datagridcontextcomponent';

export default function UseEffectComponent() {
  
    const [products, setProducts]=useState<ProductInfo[]>([]);
    const [status,setStatus] = useState('');

    useEffect(()=>{
        fetch("https://productapiserv.azurewebsites.net/api/ProductsAPI").then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setProducts(data);
        }).catch((error)=>{
            setStatus(`Error Occurred ${error}`);
        });
    },[]);
    
  return (
    <div className='container'>
      <DataContext.Provider value={products}>
        <DataGridComponent></DataGridComponent>
      </DataContext.Provider>
      <hr/>
      <div className='container'>
        {status}
      </div>
    </div>
  )
}
