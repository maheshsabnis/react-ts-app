import { Action, AnyAction } from "redux";
import * as actions from '../actions/getactions';
import { IAppState } from "../../sagasapp/state/appstate";
import { ProductInfo } from "../../props";
import { getProducts } from "../actions/getactions";
import { postProduct } from "../actions/postaction";



const initialAppState:IAppState = {
     product: new ProductInfo(0,'','','','','',0) ,
     products:new Array<ProductInfo>(),
     message:''
}; 
 
export const initialState = {
  loading: false,
  hasErrors: false,
  products: [],
}

export default function productsReducer(state = initialState, action:AnyAction) {
  switch (action.type) {
    case actions.GET_PRODUCTS:
        console.log('Inside the Get Products reducer');
      return { ...state, loading: true }
    case actions.GET_PRODUCTS_SUCCESS:
        console.log(`Inside the get products success reducer ${JSON.stringify(action.payload)}`);
      return { products: action.payload, loading: false, hasErrors: false }
    case actions.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}