import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from '../../components/Header'
import { Article } from '../../components/Article'
import { useDispatch } from 'react-redux'
import { loadNews } from '../../redux/slices/newsSlice'
import { getNews } from '../../services'

export const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getNews('crypto')
      .then((res) => {
        dispatch(loadNews(res.articles))
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [dispatch]);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} className='mb-4'>
            <Article />
          </Col>
        </Row>
      </Container>
    </>
  );
};
