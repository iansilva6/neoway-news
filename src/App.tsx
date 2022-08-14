import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/theme'

const Home = loadable(() => import('./pages/Home/'), {
  resolveComponent: (components) => components.Home,
});

const Read = loadable(() => import('./pages/Read/'), {
  resolveComponent: (components) => components.Read,
});

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ler-noticia' element={<Read />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
