/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Article } from "../../components/Article";
import { loadRead } from "../../redux/slices/readSlice";
import { useSelector, useDispatch } from "react-redux";
import { News } from "../../interfaces";
import { Link } from "react-router-dom";

export const History = () => {
  // States
  const [newsList, setNewsList] = React.useState<any[]>([]);

  // Get data from redux
  const news = useSelector((state: any) => state.history);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (news) {
      setNewsList(news);
    }
  }, [news]);

  const readNews = (news: News) => {
    dispatch(loadRead(news));
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className={"mb-2"}>
            <h2><strong>Artigos lidos recentemente:</strong></h2>
          </Col>
          <Col xs={12} className="mb-4">
            {newsList.length !== 0 ? (
              newsList.slice(0).reverse().map((item, i) => {
                return (
                  <Link to="/read" key={i} onClick={() => readNews(item)}>
                    <Article
                      title={item.title}
                      description={item.description}
                      urlToImage={item.urlToImage}
                      publishedAt={item.publishedAt}
                    />
                  </Link>
                );
              })
            ) : (
              <div className="d-flex justify-content-center py-5">
                <p>Nenhum artigo lido até o momento</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
