import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    const res = await axios.get(url);
    // console.log(res);
    const products = await res.data;
    console.log(products);
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook

const useProducContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProducContext };
