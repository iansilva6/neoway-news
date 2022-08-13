/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Article } from "../../components/Article";
import { useDispatch } from "react-redux";
import { loadNews } from "../../redux/slices/newsSlice";
import { getNews } from "../../services";
import { useSelector } from "react-redux";

export const Home = () => {
  const [newsList, setNewsList] = React.useState<any[]>([]);
  const [filterData, setFilterData] = React.useState<{
    orderBy: string;
    filterBy: string;
  }>({ orderBy: "publishedAt", filterBy: "crypto" });

  const news = useSelector((state: any) => state.news.items);

  const dispatch = useDispatch();

  const makeRequest = () => {
    getNews(filterData.filterBy, filterData.orderBy)
    .then((res) => {
      dispatch(loadNews(res.articles));
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    makeRequest()
  }, [dispatch]);

  React.useEffect(() => {
    setNewsList(news);
  }, [news]);

  const filter = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLFormElement;
    const formElements = target.elements;
    const orderBy = formElements[0] as HTMLInputElement
    const filterBy = formElements[1] as HTMLInputElement
    setFilterData({
      orderBy: orderBy.value,
      filterBy: filterBy.value
    })
    makeRequest()
    console.log(filterData);
  };

  return (
    <>
      <Header applyFilters={filter} />
      <Container>
        <Row>
          <Col xs={12} className="mb-4">
            {newsList
              ? newsList.map((item, i) => {
                  return (
                    <Article
                      key={i}
                      title={item.title}
                      subtitle={item.description}
                      image={item.urlToImage}
                      createdAt={item.publishedAt}
                    />
                  );
                })
              : ""}
          </Col>
        </Row>
      </Container>
    </>
  );
};
