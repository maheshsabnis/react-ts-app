import { AnyAction } from 'redux';
import * as actions from './../actions/postaction';
export const initialState = {
    loading: false,
    hasErrors: false,
    products: [],
  }
  
  export default function postproductsReducer(state = initialState, action:AnyAction) {
    switch (action.type) {
      case actions.POST_PRODUCT:
          console.log('Inside the Post Product reducer');
        return { ...state, loading: true }
      case actions.POST_PRODUCT_SUCCESS:
          console.log(`Inside the post products success reducer ${JSON.stringify(action.payload)}`);
        return { products: action.payload, loading: false, hasErrors: false }
      case actions.POST_PRODUCT_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }