import React from 'react'
import { useState } from 'react'
import { Product } from '../props';
import SelectComponent from '../reusablecomponents/selectcomponent';
import { DataContext } from '../datacontext';
import DataGridComponent from '../reusablecomponents/datagridcontexteventcomponent';

import DataGridContextEventComponent from '../reusablecomponents/datagridcontexteventcomponent';

import { DataContextEvent } from '../datacontext';


export default function ProductComponent() {
  const [product, setProduct] = useState<Product>({
     ProductId:'',ProductName:'',CategoryName:'',Description:'', Manufacturer:'', Price:0 
  });  
  const [products,setProducts] = useState<Product[]>([]);
  const categories = ['ECT', 'ECL', 'FOD', 'FSN'];
  const manufacturers = ['MS-Electronics', 'LS-Electrical', 'TS-Tools', 'MS-Foods', 'LS-Tools', 'MS-Fashion', 'LS-Fashion'];

  const clear = ()=>{
    setProduct({
        ProductId:'',ProductName:'',CategoryName:'',Description:'', Manufacturer:'', Price:0 
     });
  };

  const save=()=>{
    setProducts([...products, product]);
  };

  return (
    <div className='container'>
       <div className='form-group'>
         <label>Product Id</label>
         <input type="text" className='form-control' placeholder='Enter Product Id'
         value={product.ProductId} onChange={(evt)=>setProduct({...product,ProductId:evt.target.value})}
         />
       </div>
       <div className='form-group'>
         <label>Product Name</label>
         <input type="text" className='form-control' placeholder='Enter Product Name'
         value={product.ProductName} onChange={(evt)=>setProduct({...product,ProductName:evt.target.value})}
         />
       </div>
       <div className='form-group'>
         <label>Category Name</label>
          <SelectComponent dataSource={categories} propertyName={product.CategoryName}
           selectedData={(value:string)=>setProduct({...product, CategoryName:value})}></SelectComponent>
       </div>
       <div className='form-group'>
         <label>Dscription</label>
         <textarea className='form-control' placeholder='Enter Description'
         value={product.Description} onChange={(evt)=>setProduct({...product,Description:evt.target.value})}
         ></textarea>
       </div>
       <div className='form-group'>
         <label>Manufacturer Name</label>
          <SelectComponent dataSource={manufacturers} propertyName={product.Manufacturer}
           selectedData={(value:string)=>setProduct({...product, Manufacturer:value})}
           ></SelectComponent>
       </div>
       <div className='form-group'>
         <label>Base Price</label>
         <input type="text" className='form-control' placeholder='Enter Base Price'
         value={product.Price} onChange={(evt)=>setProduct({...product,Price:parseInt(evt.target.value)})}
         />
       </div>
       <div className='btn-group-lg'>
         <button className='btn btn-warning' onClick={clear}>New</button>
         <button className='btn btn-success' onClick={save}>Save</button>
       </div>
       <hr/>
       {/* <DataContext.Provider value={products}>
         <DataGridComponent></DataGridComponent>
       </DataContext.Provider> */}

        <DataContextEvent.Provider value={{products,setProduct}}>
         <DataGridContextEventComponent></DataGridContextEventComponent>
        </DataContextEvent.Provider>
    </div>
  )
}
