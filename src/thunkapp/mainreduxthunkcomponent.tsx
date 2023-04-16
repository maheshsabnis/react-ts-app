import React,{useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { fetchproducts } from './actions/getactions';
import { fetchPostproduct } from './actions/postaction';
import { Dispatch } from 'redux';
import { ProductInfo } from '../props';
import { IAppState } from '../sagasapp/state/appstate';
 

const MainReduxThunkComponent = () => {
    const dispatch: Dispatch<any> = useDispatch();

   

    const stateData = useSelector((state:any)=>state.readProducts)

        // dispatch an action in use effect
    useEffect(()=>{
        dispatch(fetchproducts());
    },[dispatch]);


    const save=()=>{
        let product:ProductInfo = new ProductInfo(0,
          'Prd-10002',
            'RAM',
            'Electronics',
           'MS-Electronics',
           '100 Keys',
           23450
        );

        dispatch(fetchPostproduct(product));
    };

    // define a function that will render some UI based on execution stage of the
    // the action

    const renderUI=()=>{
    console.log(`In the render UI ${JSON.stringify(stateData)}`);
        if(stateData !== undefined) {
            
            return(
                <div className='container'>
                    {JSON.stringify(stateData.products)}
                    <hr/>
                    {/* {stateData.message} */}
                </div>
            ); 
                 
        } else {
            return (
                <div className='container'>
                    <strong>
                        Something is wrong
                    </strong>
                </div>
            );
        }
    };

  return (
    <div className="container">
            <h1>Using React-Redux-Thunk</h1>
            {renderUI()}
            <hr/>
            <input type="button" value="Post Data" className='btn btn-success'
             onClick={save}/>    
        </div>
  )
}

export default MainReduxThunkComponent
