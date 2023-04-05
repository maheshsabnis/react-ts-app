import { createAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../../props";

export const getProducts = createAction('GET_PRODUCTS',(msg:string)=>{
    console.log('The Action isn dispatched');
    return {
        payload:{
            message:msg
        }
    }
});

export const getProductsSuccess = createAction('GET_PRODUCTS_SUCCESS', (products:Array<ProductInfo>, message:string)=>{
    console.log(`Get Products is called`);
    return {
        payload:{
            products:products,
            message: message
        }
    }
});

export const addProduct = createAction('ADD_NEW_PRODUCT', (prd:ProductInfo)=>{
    console.log(`Add product action is dispatched ${JSON.stringify(prd)}`);
    return {
        payload:{
            product:prd
        }
    }
});

export const addProductSuccess = createAction('ADD_NEW_PRODUCT_SUCCESS', (prd:ProductInfo)=>{
    console.log(`Add product success action is dispatched ${JSON.stringify(prd)}`);
    return {
        payload:{
            product:prd
        }
    }
});

 