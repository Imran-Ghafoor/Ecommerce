import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/FilterContext";

const Sort = () => {
  const {
    grid_view,
    SetGridView,
    SetListView,
    filter_products,
    SelectionSorting,
  } = useFilterContext();
  // here design one-row & three-column
  return (
    <Wrapper className="sort-section">
      {/* first column */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={SetGridView}
        >
          <BsFillGridFill className="icon " />
        </button>
        <button
          className={!grid_view ? " active sort-btn" : " sort-btn"}
          onClick={SetListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      {/* second column */}
      <div className="droduct-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      {/* third column */}
      <div className="sort-selection">
        <form action="">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={SelectionSorting}
          >
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort;
