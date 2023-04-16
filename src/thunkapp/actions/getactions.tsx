import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux'
import { ProductInfo } from "../../props";
import { ProductHttpService } from "../../service/producthttpservice";
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProducts=():AnyAction=>({type:GET_PRODUCTS});
export const getProductsSuccess = (products:ProductInfo[]):AnyAction=>({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
});

export const getProductsFailure = ():AnyAction => ({ type: GET_PRODUCTS_FAILURE })

export function fetchproducts(){
    console.log('Inside the action');
    return async (dispatch:ThunkDispatch<{},{},AnyAction>) =>{
        dispatch(getProducts());
        const serv = new ProductHttpService();
        try {
            const response  = await serv.getProducts();
            const data = response;
            dispatch(getProductsSuccess(data));
        } catch(e){
            dispatch(getProductsFailure());
        }
    }
}