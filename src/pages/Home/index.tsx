/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Article } from "../../components/Article";
import { FilterForm } from "../../components/FilterForm";
import { loadNews } from "../../redux/slices/newsSlice";
import { loadRead } from "../../redux/slices/readSlice";
import { loadHistory } from "../../redux/slices/historySlice";
import { getNews } from "../../services";
import { useSelector, useDispatch } from "react-redux";
import { Object, Filter, News } from "../../interfaces";
import { Link } from "react-router-dom";

export const Home = () => {
  // States
  const [newsList, setNewsList] = React.useState<any[]>([]);
  const [filterData, setFilterData] = React.useState<Filter>({
    orderBy: "publishedAt",
    filterBy: "crypto",
  });
  const [loading, setLoading] = React.useState<boolean>(true);

  // Get data from redux
  const news = useSelector((state: any) => state.news.items);

  const dispatch = useDispatch();

  // Make request to get news
  const makeRequest = () => {
    getNews(filterData)
      .then((res) => {
        dispatch(loadNews(res.articles));
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        alert(err?.message);
      });
  };

  React.useEffect(() => {
    makeRequest();
  }, [dispatch]);

  React.useEffect(() => {
    if (news.length > 0) {
      setLoading(false);
      setNewsList(news);
    }
  }, [news]);

  // Handle to save filter data
  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    const target = evt.target;
    const name = target.name;

    const formDataActions: Object = {
      orderBy: target.value,
      filterBy: target.value,
    };

    const value = formDataActions[name];

    setFilterData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // Function to make filter and request
  const filter = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);
    makeRequest();
  };

  const readNews = (news: News) => {
    dispatch(loadRead(news));
    dispatch(loadHistory(news));
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12}>
            <FilterForm handleSubmit={filter} handleChange={handleChange} />
          </Col>
          <Col xs={12} className="mb-4">
            {newsList && !loading ? (
              newsList.map((item, i) => {
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
                <Spinner animation="border" variant="dark" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
