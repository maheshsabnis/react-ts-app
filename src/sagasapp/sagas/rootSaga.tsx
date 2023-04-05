import { ProductHttpService } from "../../service/producthttpservice";

import {  put, all, call, takeLatest } from "redux-saga/effects";
import { ProductInfo } from "../../props";
import {  Action, ActionCreator, AnyAction } from "redux";
import { addProductSuccess, getProductsSuccess } from "../actions/actionstoolkit";
 

function getAllProducts():Promise<ProductInfo[]> {
    console.log('====================================');
    console.log(`In Service Call `);
    console.log('====================================');
    let serv = new ProductHttpService();
    // the resolved promise object which is a response which is itself a promise
    const response = serv.getProducts().then((result) => result);
   
    // lets resolve the promise response
    return Promise.resolve(response);
  }


  function createProduct(product:ProductInfo):Promise<ProductInfo> {
    let serv = new ProductHttpService();
    // the resolved promise object which is a response which is itself a promise
    const response = serv.postProduct(product).then((result) => result);
    // lets resolve the promise response
    return Promise.resolve(response);
  }

function* addProductOutput(action:any): Generator{
    console.log(`In the Add Product Output saga `);
    try {
        const payload = action.payload.product;
        console.log(`The ayload from Action : ${JSON.stringify(payload)} `);
        const response = yield call(createProduct, payload);
        const product: ProductInfo = response as ProductInfo;
        yield put(addProductSuccess(
            product
        ));
    }catch(e:any){
        yield put({
            type: 'ADD_NEW_PRODUCT_FAILED',
            message: 'New product is addition is failed'
        });
    }
} 

function* addProductInput(){
    console.log(`In the Add Product  saga `);
    yield takeLatest('ADD_NEW_PRODUCT', addProductOutput);
}  

function* getProductsOutput():Generator{
    console.log(`Get Products output action is called`);
    try {
        const response = yield call(getAllProducts);
        console.log(`Received Products ${JSON.stringify(response)}`)
        let products:Array<ProductInfo> = response as Array<ProductInfo>;
        // yield put({
        //     type: 'GET_PRODUCTS_SUCCESS',
        //     products:response,
        //     message: 'Products are received successfully'
        // });
        yield put(getProductsSuccess(products, 'Products are received successfully'));
    } catch(e:any){
        yield put({
            type: 'GET_PRODUCTS_FAILED',
            message: 'Products red failed'
        });
    }
   
}


function* getProductsInput(){
    console.log(`Get Products action is called`);
    yield takeLatest('GET_PRODUCTS', getProductsOutput);
}

function* rootSaga(){
    console.log('====================================');
    console.log('In Root Saga');
    console.log('====================================');
    yield all([getProductsInput(),addProductInput()]);
}

export default rootSaga;