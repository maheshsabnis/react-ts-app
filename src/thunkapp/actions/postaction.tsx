import { ThunkDispatch } from "redux-thunk";
import { ProductInfo } from "../../props";
import { ProductHttpService } from "../../service/producthttpservice";
import { AnyAction } from "redux";

export const POST_PRODUCT = 'POST_PRODUCT';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
export const POST_PRODUCT_FAILURE = 'POST_PRODUCT_FAILURE';

export const postProduct=(product:ProductInfo)=>({type:POST_PRODUCT});
export const postProductSuccess = (product:ProductInfo)=>({
    type: POST_PRODUCT_SUCCESS,
    payload: product
});

export const postProductFailure = () => ({ type: POST_PRODUCT_FAILURE })

export function fetchPostproduct(prd:ProductInfo){
    console.log(`Inside post action ${JSON.stringify(prd)}`);
    return async (dispatch:ThunkDispatch<{},{},AnyAction>) =>{
        dispatch(postProduct(prd));
        const serv = new ProductHttpService();
        try {
            const response  = await serv.postProduct(prd);
            const data = response;
            dispatch(postProductSuccess(data));
        } catch(e){
            dispatch(postProductFailure());
        }
    }
}