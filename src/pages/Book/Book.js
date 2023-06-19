import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { Button, Card, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const Book = () => {
    const [books, setBook] = useState([]);
    // const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('book?size=30', { headers: { 'Content-Type': 'application/json' }, method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setBook(data.books);
                // setCategories(data.categories);
            });
    }, []);

    const filterByCategory = (category) => {
        let output = books.filter((book) => {
            let opt = book.categories.some(({ name }) => name === category);
            return opt;
        });
        return output;
    };

    return (
        <>
            <Container>
                <div>
                    <Link
                        to="/book/category/new-book/1"
                        className="d-block h2 text-dark text-center my-5"
                    >
                        New Books
                    </Link>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 13rem)',
                        }}
                    >
                        {books.slice(0, 6).map((book) => (
                            <Link
                                to={`/book/${book.id}`}
                                key={book.id}
                                state={{ book: book }}
                                className="text-dark"
                            >
                                <Card style={{ width: '10rem' }} className="mb-5 border-0">
                                    <Card.Img
                                        variant="top"
                                        src={book.image.link}
                                        style={{ height: 230 }}
                                    />
                                    <Card.Body className="p-0">
                                        <h6 className="text-center">{book.name}</h6>
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <Link
                        to="/book/category/643fa18831fa812c081ce3d2/1"
                        className="d-block h2 text-dark text-center my-5"
                    >
                        Horror Books
                    </Link>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 13rem)',
                        }}
                    >
                        {filterByCategory('Horror')
                            .slice(0, 6)
                            .map((book) => (
                                <Link
                                    to={`/book/${book.id}`}
                                    key={book.id}
                                    state={{ book: book }}
                                    className="text-dark"
                                >
                                    <Card style={{ width: '10rem' }} className="mb-5 border-0">
                                        <Card.Img
                                            variant="top"
                                            src={book.image.link}
                                            style={{ height: 230 }}
                                        />
                                        <Card.Body className="p-0">
                                            <h6 className="text-center">{book.name}</h6>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            ))}
                    </div>
                </div>
                <div>
                    <Link
                        to="/book/category/643fa19831fa812c081ce3d4/1"
                        className="d-block h2 text-dark text-center my-5"
                    >
                        Romance Books
                    </Link>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 13rem)',
                        }}
                    >
                        {filterByCategory('Romance')
                            .slice(0, 6)
                            .map((book) => (
                                <Link
                                    to={`/book/${book.id}`}
                                    key={book.id}
                                    state={{ book: book }}
                                    className="text-dark"
                                >
                                    <Card style={{ width: '10rem' }} className="mb-5 border-0">
                                        <Card.Img
                                            variant="top"
                                            src={book.image.link}
                                            style={{ height: 230 }}
                                        />
                                        <Card.Body className="p-0">
                                            <h6 className="text-center">{book.name}</h6>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Book;
