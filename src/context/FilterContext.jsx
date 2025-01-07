import { createContext, useContext, useEffect, useReducer } from "react";
import { useProducContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
  },
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

  // update the search-filter values
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    // to search-filter
    dispatch({ type: "FILTER_PRODUCTS" });
    // to sorting products
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        SetGridView,
        SetListView,
        SelectionSorting,
        updateFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
