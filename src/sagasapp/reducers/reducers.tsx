import { Action } from "redux";
import { IAppState } from "../state/appstate";
import { createReducer } from "@reduxjs/toolkit";
import { ProductInfo } from "../../props";
import { getProducts, addProduct, getProductsSuccess, addProductSuccess } from "../actions/actionstoolkit";
const initialState:IAppState = {
     product: new ProductInfo(0,'','','','','',0) ,
     products:new Array<ProductInfo>(),
     message:''
}; 
// export  const reducer =(state: IAppState, action:Action)=> {

// };

export const reducer = createReducer(initialState, (builder)=>{
  builder.addCase(getProducts,(state,action)=>{
    console.log('In Reducers');
    state.products = [];
    state.message = 'Get products request is initialized'
  }).addCase(getProductsSuccess, (state,action)=>{
    console.log(`In Reducer Success ${JSON.stringify(action.payload.products)} ${action.payload.message}`);
    state.products = action.payload.products;
    state.message =action.payload.message;
  }).addCase(addProductSuccess, (state,action)=>{
    state.product = action.payload.product;
    state.products = [...state.products, action.payload.product];
    state.message = 'The Product is added successfully';
  })
});

 