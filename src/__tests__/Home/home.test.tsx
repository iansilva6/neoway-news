import { render, screen } from "@testing-library/react";
import { loadNews } from "../../redux/slices/newsSlice";
import { mockedNews } from "../../mocks";
import GlobalStyle from "../../assets/styles/global";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Home } from "../../pages/Home";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../assets/styles/theme";

describe("Home page", () => {
  beforeEach(() => {
    store.dispatch(loadNews(mockedNews.articles));
  });
  it("Show all news", () => {
    render(
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={defaultTheme}>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getAllByRole("article")).toHaveLength(
      mockedNews.articles.length
    );
  });
});
