import React from 'react'
import { ProductInfo } from '../../../props'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addProduct } from '../../actions/actionstoolkit';

export default function AddProductComponent() {
  const product:ProductInfo = new ProductInfo(0, 'Prod-10092', 'Cup', 'Home Appliances', 'MS-Household', 'Heat Observer', 1000);
  const dispatch: Dispatch<any> = useDispatch();

  const addClick=()=>{
    dispatch(addProduct(product));
  };

  return (
    <div className='container'>
        <button className='btn btn-success'
         onClick={addClick}
        >Add Product</button>
    </div>
  )
}
