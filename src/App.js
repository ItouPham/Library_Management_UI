import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route key={`public ${index}`} path={route.path} element={<Page />} />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
