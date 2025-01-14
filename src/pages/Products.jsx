import styled from "styled-components";
import FilterSection from "../components/UI/FilterSection";
import ProductList from "../components/UI/ProductList";
import Sort from "../components/UI/Sort";

const Products = () => {
  return (
    <Wrapper>
      {/* first column */}
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        {/* second column */}
        {/* first row */}
        <section className="product-view-sort">
          <div className="sort-filter">
            <Sort />
          </div>

          {/* second row */}
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
