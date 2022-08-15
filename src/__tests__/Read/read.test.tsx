import { render, screen } from "@testing-library/react";
import { mockedNews } from "../../mocks";
import GlobalStyle from "../../assets/styles/global";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Read} from "../../pages/Read";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../assets/styles/theme";
import { loadRead } from "../../redux/slices/readSlice";
import { formatDate } from '../../utils';

describe("Read page", () => {
  beforeEach(() => {
    store.dispatch(loadRead(mockedNews.articles[0]));
  });
  it("Show correct content", () => {
    render(
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={defaultTheme}>
          <MemoryRouter>
            <Read/>
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    const title = mockedNews.articles[0].title
    const content = mockedNews.articles[0].content
    const author = `Escrito por: ${mockedNews.articles[0].author}`
    const publishedAt = `Publicado em: ${formatDate(mockedNews.articles[0].publishedAt)}`

    expect(screen.getByTestId('title')).toHaveTextContent(title)
    expect(screen.getByTestId('content')).toHaveTextContent(content)
    expect(screen.getByTestId('author')).toHaveTextContent(author)
    expect(screen.getByTestId('publishedAt')).toHaveTextContent(publishedAt)
  });
});
