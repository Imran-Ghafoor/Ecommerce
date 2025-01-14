import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to={"/"}>
        <img src="./images/logo.png" alt="logo image" />
      </NavLink>
      <NavBar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0.4rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
