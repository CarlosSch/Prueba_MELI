import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../api/fetchApi";
import { AxiosError } from "axios";
import {
  onLoadProductDetail,
  onLoadProducts,
  onLoadingProduct,
  onLoadError,
  RootState,
} from "../../store";

export const useProductStore = () => {
  const dispatch = useDispatch();
  const { products, productDetail, categories, isLoadingProducts, error } =
    useSelector((state: RootState) => state.product);

  const searchProducts = async (query: string) => {
    try {
      dispatch(onLoadingProduct());
      const { data } = await fetchApi.get(`items?q=${query}`);
      dispatch(onLoadProducts(data));
    } catch (error) {
      if (AxiosError) {
        const axiosError = error as AxiosError;
        dispatch(onLoadError(axiosError.response?.data));
      } else {
        console.error("Error al realizar la búsqueda", error);
      }
    }
  };

  const getProductById = async (id: string) => {
    try {
      dispatch(onLoadingProduct());
      const { data } = await fetchApi.get(`items/${id}`);
      dispatch(onLoadProductDetail(data));
    } catch (error) {
      if (AxiosError) {
        const axiosError = error as AxiosError;
        dispatch(onLoadError(axiosError.response?.data));
      } else {
        console.error(`Error al buscar el item ${id}}`, error);
      }
    }
  };

  return {
    //States
    products,
    productDetail,
    categories,
    isLoadingProducts,
    error,

    //Methods
    searchProducts,
    getProductById,
  };
};
