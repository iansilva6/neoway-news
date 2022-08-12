import { Form, Button } from 'react-bootstrap'

export const FilterForm = () => {
  return (
    <Form className={"d-flex align-items-end justify-content-center"}>
      <Form.Group className="me-3" controlId="orderBy">
        <Form.Label>Ordenar:</Form.Label>
        <Form.Select aria-label="Ordenar por">
          <option value='publishedAt'>Data de publicação</option>
          <option value='relevancy'>Relevância</option>
          <option value='popularity'>Popularidade</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="me-3" controlId="filterBy">
        <Form.Label>Filtrar:</Form.Label>
        <Form.Select aria-label="Filtrar por">
          <option>Todos</option>
          <option value='bitcoin'>Bitcoin</option>
          <option value='ethereum'>Ethereum</option>
          <option value='bnb'>BNB</option>
          <option value='xrp'>XRP</option>
          <option value='cardano'>Cardano</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Aplicar
      </Button>
    </Form>
  );
};
