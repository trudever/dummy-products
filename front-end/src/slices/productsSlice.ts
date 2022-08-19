import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import getAxios from '../helper/wrappedAxios';

const axios = getAxios();

export interface ProductObj {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: Array<string>,
};

export interface ProductsInfoObj {
  products: Array<ProductObj>,
  total: number,
}

export interface ProductsState {
  productsInfo: ProductsInfoObj,
  categories: Array<string>,
  page: number,
  selectedCategory: string,
  modalImage: string,
  isLoading: boolean,
};

const initialState: ProductsState = {
  productsInfo: { products: [], total: 0 },
  categories: [],
  page: 1,
  selectedCategory: 'All',
  modalImage: '',
  isLoading: true,
};

export const getInitialProducts = createAsyncThunk('getProducts', async (page: number) => {
  const res = await axios.get(`/products?page=${page}&category=All`);
  return res.data;
});

export const getCategories = createAsyncThunk('getCategories', async () => {
  const res = await axios.get(`/categories`);
  return res.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsInfoObj>) => {
      state.productsInfo = action.payload;
    },
    setCategories: (state, action: PayloadAction<Array<string>>) => {
      state.categories = [...action.payload];
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    changePage: (state, action: PayloadAction<number>) => {
      const _page = state.page + action.payload;
      state.page = _page;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setModalImage: (state, action: PayloadAction<string>) => {
      state.modalImage = action.payload;
    },
    switchIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setAllEmpty: (state) => {
      // state.products = [];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getInitialProducts.fulfilled, (state, action) => {
      state.productsInfo = { products: action.payload.products, total: action.payload.total };
      state.isLoading = false;
      return state;
    });

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = ['All', ...action.payload];
      return state;
    });
  }
});

// Action creators are generated for each case reducer function
export const {
  setProducts,
  setCategories,
  setSelectedCategory,
  setPage,
  changePage,
  setModalImage,
  switchIsLoading,
  setAllEmpty,
} = productsSlice.actions;

export default productsSlice.reducer;