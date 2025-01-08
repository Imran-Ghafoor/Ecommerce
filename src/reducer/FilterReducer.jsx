const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      {
        /*  let userSortValue = document.getElementById("sort"); */
      }
      //   let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_products, sorting_value } = state;
      let temSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      //   if (state.sorting_value === "lowest") {
      //     const sortingProducts = (a, b) => {
      //       return a.price - b.price;
      //     };
      // newSortData = temSortProduct.sort(sortingProducts);
      //   }

      //   if (state.sorting_value === "highest") {
      //     const sortingProducts = (a, b) => {
      //       return b.price - a.price;
      //     };
      //   }

      //   if (state.sorting_value === "a-z") {
      //     newSortData = temSortProduct.sort((a, b) =>
      //       a.name.localeCompare(b.name)
      //     );
      //   }

      //   if (state.sorting_value === "z-a") {
      //     newSortData = temSortProduct.sort((a, b) =>
      //       b.name.localeCompare(a.name)
      //     );
      //   }

      newSortData = temSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    // search-filter
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      // category filter
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      // company filter
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    default:
      return state;
  }
};

export default FilterReducer;
