import Author from '../pages/Author/Author';
import Book from '../pages/Book/Book';
import Home from '../pages/Home/Home';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/book', component: Book },
    { path: '/author', component: Author },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
