import { NavbarBrand } from 'react-bootstrap'
import { Container, Title, Subtitle } from './style'
import { FilterForm } from '../FilterForm'
import { HeaderFunctions } from '../../interfaces'

export const Header: React.FC<HeaderFunctions> = ({applyFilters, handleChange}) => {
  return (
    <Container>
      <NavbarBrand href={"/"}>
        <Title>Neoway News</Title>
        <Subtitle>Nóticias sobre criptomoedas</Subtitle>
      </NavbarBrand>
      <FilterForm 
        applyFilters={applyFilters}
        handleChange={handleChange}
      />
    </Container>
  );
};
