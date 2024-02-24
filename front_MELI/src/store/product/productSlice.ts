import { createSlice } from "@reduxjs/toolkit";
import { Author, Product, ProductDetailProps } from '../../app/interfaces';

interface InitialState {
    author: Author;
    categories: string[];
    products: Product[];
    productDetail: ProductDetailProps;
    isLoadingProducts: boolean;
    error: string;
}

const initialState: InitialState = {
    author: { name: "", lastname: ""},
    categories: [],
    products: [],
    productDetail: {
        id: '',
        title: '',
        price: { currency: 'USD', amount: 0, decimals: 0 },
        picture: '',
        condition: '',
        free_shipping: false,
        description: '',
      },
    isLoadingProducts: false,
    error: "",
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        onLoadProducts: (state, { payload = {} }) => {
            state.error = "";
            state.categories = payload.categories
            state.products = payload.items;
            state.isLoadingProducts = false;
        },
        onLoadProductDetail: (state, { payload = {} }) => {
            state.error = "";
            state.categories = payload.categories
            state.productDetail = payload.item;            
            state.isLoadingProducts = false;
        },
        onLoadingProduct: (state) => {
            state.isLoadingProducts = true;
        },
        onLoadError: (state, { payload = {} }) => {
            state.error = payload.message;
            state.isLoadingProducts = false;
        }
    }
});

export const {
    onLoadProducts,
    onLoadProductDetail,
    onLoadingProduct,
    onLoadError
} = productSlice.actions;