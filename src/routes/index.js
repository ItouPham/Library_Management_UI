import Author from '../pages/Author/Author';
import AuthorProfile from '../pages/AuthorProfile/AuthorProfile';
import Book from '../pages/Book/Book';
import BookDetail from '../pages/BookDetail/BookDetail';
import Home from '../pages/Home/Home';
import ListBookByCategory from '../pages/ListBookByCategory/ListBookByCategory';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/book', component: Book },
    { path: '/book/:bookId', component: BookDetail },
    { path: '/book/category/:categoryId/:page', component: ListBookByCategory },
    { path: '/author', component: Author },
    { path: '/author/:authorId', component: AuthorProfile },
];

const privateRoutes = [{ path: '/admin', component: Home }];

export { publicRoutes, privateRoutes };
