import { fetchFromApi } from "react-redux-api-tools";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';


export const fetchProducts = () => {
  return {
    types: {
      request: FETCH_PRODUCTS,
      success: FETCH_PRODUCTS_SUCCESS,
      failure: FETCH_PRODUCTS_FAILURE,
    },
    shouldDispatch: state => !state.products.items || !state.products.items.length,
    apiCallFunction: () => fetchFromApi('/api/inventory/'),
  };
}


export const fetchProduct = (code) => {
  return {
    types: {
      request: FETCH_PRODUCT,
      success: FETCH_PRODUCT_SUCCESS,
      failure: FETCH_PRODUCT_FAILURE,
    },
    shouldDispatch: state => !state.products.selectedItem,
    apiCallFunction: () => fetchFromApi(`/api/inventory/${code}/`)
  };
}
