import React, { useEffect } from 'react'
import { IAppState } from '../../state/appstate'
import DataGridComponent from '../../../reusablecomponents/datagridcontextcomponent'
import { DataContext } from '../../../datacontext'
import { ProductInfo } from '../../../props';

type dataProps = {
  getData:Function,
  products:Array<ProductInfo>
};

export default function ProductsListComponent(props:dataProps) {
  console.log(`The Products List Component ${JSON.stringify(props.products)}`);

  useEffect(()=>{
    props.getData({...props.products});
  },[]);

  const onClick = ()=>{
    // props.getData({...props.products});
  };

  return (
    <div className='container'>
        {/* <button className='btn btn-warning' onClick={onClick}>SHow Products</button> */}
        <DataContext.Provider value={props.products}>
            <DataGridComponent></DataGridComponent>
        </DataContext.Provider>
    </div>
  )
}
