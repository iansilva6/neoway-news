import { Container } from "./style";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/history">
            <Button variant="secondary" size="lg" className="me-3">
              Lidos Recentemente
            </Button>
          </Link>
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
