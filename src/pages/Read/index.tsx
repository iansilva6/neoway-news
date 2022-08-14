/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { News } from "../../interfaces";

export const Read = () => {
  const [news, setNews] = React.useState<News>({
    title: "",
    content: "",
    urlToImage: "",
    publishedAt: "",
    description: "",
  });
  const [loading, setLoading] = React.useState<boolean>(true);

  const read = useSelector((state: any) => state.read.item);

  React.useEffect(() => {
    setNews(read);
    setLoading(false);
  }, [news]);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12}>
            {news && !loading ? (
              <div></div>
            ) : (
              <div className="d-flex justify-content-center py-5">
                <Spinner animation="border" variant="dark" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
