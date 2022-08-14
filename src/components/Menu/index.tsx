import { Container } from "./style";
import { Button } from "react-bootstrap";

export const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <Button variant="secondary" size="lg" className="me-3">
            Lidos Recentemente
          </Button>
        </li>
        <li>
          <Button variant="warning" size="lg">
            Favoritos (0)
          </Button>
        </li>
      </ul>
    </Container>
  );
};
