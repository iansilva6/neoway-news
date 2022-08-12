import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom';

const Home = loadable(() => import("./pages/Home/"), {
    resolveComponent: (components) => components.Home,
});

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    );
};

export default App;
