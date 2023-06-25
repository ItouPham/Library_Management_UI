import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import NavBar from './components/NavBar/NavBar';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                {window.location.href.includes('/admin') ? <h1>Hello</h1> : <NavBar />}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route key={`public ${index}`} path={route.path} element={<Page />} />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route key={`private ${index}`} path={route.path} element={<Page />} />
                        );
                    })}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
