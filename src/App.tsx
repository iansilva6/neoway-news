import React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/styles/theme";
import { useDispatch } from "react-redux";
import { loadNews } from "./redux/slices/newsSlice";
import { getNews } from "./services";

const Home = loadable(() => import("./pages/Home/"), {
  resolveComponent: (components) => components.Home,
});

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getNews('bitcoin')
      .then((res) => {
        dispatch(loadNews(res.data.articles));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
