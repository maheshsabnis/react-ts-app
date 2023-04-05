import React from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import ProductsListComponent from './productslistcomponent/productslistcomponent'
import { IAppState } from '../state/appstate';
import { ProductInfo } from '../../props';
import { Dispatch } from 'redux';
import { getProducts } from '../actions/actionstoolkit';
import AddProductComponent from './productslistcomponent/addproductcomponent';

export default function MainReduxSagaComponent() {
    const products:  ProductInfo[] = useSelector(
        (state: IAppState) => state.products,
        shallowEqual
      );
    
      const dispatch: Dispatch<any> = useDispatch();
    
      const getData = React.useCallback(
        (state: IAppState) => dispatch(getProducts('Initiating')),
        [dispatch]
      );
      
  return (
    <div className='container'>
       <h1>The SAGA App</h1>
       <ProductsListComponent products={products} getData={getData}></ProductsListComponent>
       <hr/>
       <AddProductComponent></AddProductComponent>
    </div>
  )
}
