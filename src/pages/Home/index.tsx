/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Header } from '../../components/Header'
import { Article } from '../../components/Article'
import { Menu } from '../../components/Menu'
import { useDispatch } from 'react-redux'
import { loadNews } from '../../redux/slices/newsSlice'
import { getNews } from '../../services'
import { useSelector } from 'react-redux'
import { Object, Filter } from '../../interfaces'

export const Home = () => {
  // States
  const [newsList, setNewsList] = React.useState<any[]>([])
  const [filterData, setFilterData] = React.useState<Filter>({ orderBy: "publishedAt", filterBy: "crypto" })
  const [loading, setLoading] = React.useState<boolean>(true)

  // Get data from redux
  const news = useSelector((state: any) => state.news.items)

  const dispatch = useDispatch()

  // Make request to get news
  const makeRequest = () => {
    getNews(filterData)
      .then((res) => {
        dispatch(loadNews(res.articles))
        setLoading(false)
        console.log(res)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      });
  };

  React.useEffect(() => {
    makeRequest()
  }, [dispatch])

  React.useEffect(() => {
    setNewsList(news)
    setLoading(false)
  }, [news]);

  // Handle to save filter data
  const handleFilter = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault()
    const target = evt.target
    const name = target.name

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
    evt.preventDefault()
    setLoading(true)
    makeRequest()
  };

  return (
    <>
      <Header applyFilters={filter} handleChange={handleFilter} />
      <Container>
        <Row>
          <Col xs={12}>
            <Menu/>
          </Col>
          <Col xs={12} className="mb-4">
            {newsList && !loading
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
              : <div className='d-flex justify-content-center py-5'><Spinner animation="border" variant="dark" /></div>}
          </Col>
        </Row>
      </Container>
    </>
  );
};
