import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from '../../components/Header'
import { Article } from '../../components/Article'
import { useDispatch } from 'react-redux'
import { loadNews } from '../../redux/slices/newsSlice'
import { getNews } from '../../services'
import { useSelector } from 'react-redux'

export const Home = () => {
  const [newsList, setNewsList] = React.useState<any[]>([])
  const news = useSelector((state: any) => state.news.items)

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

  React.useEffect(() => {
    setNewsList(news)
  }, [news])

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} className='mb-4'>
            {
              newsList ? 
                newsList.map((item, i) => {
                  return (
                    <Article 
                      key={i}
                      title={item.title}
                      subtitle={item.description}
                      image={item.urlToImage}
                      createdAt={item.publishedAt}
                    />
                  )
                }
              ) : ''
            }
            
          </Col>
        </Row>
      </Container>
    </>
  );
};
