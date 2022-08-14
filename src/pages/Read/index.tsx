/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { News } from "../../interfaces";
import { Article } from "./style";
import { formatDate } from "../../utils";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  React.useEffect(() => {
    if (Object.keys(read).length !== 0) {
      setNews(read);
      setLoading(false);
      console.log(read)
    } else {
      return navigate("/");
    }
  }, [read]);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12}>
            {news && !loading ? (
              <Article>
                <div className="text-center">
                  <Image
                    width={400}
                    className={"mb-4"}
                    src={news.urlToImage}
                    alt={news.title}
                  />
                </div>
                <h2 className="text-center">{news.title}</h2>
                <div className="text-center mb-2">
                  <a href={news.url} target="_blank" rel="noreferrer noopener">Ver artigo no site de origem</a>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <span className="me-3 text-center">Escrito por: {news.author}</span>
                  <span className="text-center">Publicado em: {formatDate(news.publishedAt)}</span>
                </div>
                <p>{news.content}</p>
              </Article>
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
