import { NavbarBrand } from "react-bootstrap";
import { Container, Title, Subtitle } from "./style";
import { Menu } from "../Menu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <NavbarBrand>
          <Title>Neoway News</Title>
          <Subtitle>Nóticias sobre criptomoedas</Subtitle>
        </NavbarBrand>
      </Link>
      <Menu />
    </Container>
  );
};
