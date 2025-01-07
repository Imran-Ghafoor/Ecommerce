import { createContext, useContext, useEffect, useReducer } from "react";
import { useProducContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProducContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //   set grid-view
  const SetGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //   set list-view
  const SetListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // SelectionSorting fun
  const SelectionSorting = (e) => {
    let userValue = e.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  // to sorting products
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, SetGridView, SetListView, SelectionSorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
