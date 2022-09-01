import getAxios from './wrappedAxios';
import { setProducts, switchIsLoading } from '../slices/productsSlice';

const axios = getAxios();

export const getProducts = async (page: number, category: string, dispatch: Function) => {
  try {
    dispatch(switchIsLoading());
    let res = await axios.get(`/products?category=${category}&page=${page}`);
    const data = res.data;
    dispatch(setProducts({ products: data.products , total: data.total }));
    dispatch(switchIsLoading());
  } catch (err: any) {
    console.log(err);
  }
};