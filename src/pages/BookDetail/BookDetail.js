import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

const BookDetail = (props) => {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        image: { link: '' },
        author: { id: '', name: '' },
        shortDescription: '',
    });
    const [books, setBooks] = useState([]);
    const { state } = useLocation();
    const { bookId } = useParams();

    useEffect(() => {
        if (state === null) {
            getBookById().then((data) => {
                setBook(data.book);
                getBooksByAuthorId(data.book.author.id).then((response) =>
                    setBooks(response.books),
                );
            });
            // .then(() => getBooksByAuthorId(book.author.id))
            // .then((data) => setBooks(data.books));
        } else {
            setBook(state.book);
            getBooksByAuthorId(state.book.author.id).then((data) => setBooks(data.books));
        }
    }, [bookId]);

    const getBookById = () => {
        return fetch(`/book/getById/${bookId}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                navigate('/NotFound');
            }
        });
    };

    const getBooksByAuthorId = (id) => {
        return fetch(`/book/author/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                navigate('/NotFound');
            }
        });
    };

    return (
        <Container>
            <h1 className="text-center my-5">Book Detail</h1>
            <Row>
                <Col md={3}>
                    <img src={book.image.link} alt="" style={{ width: 270, height: 400 }} />
                </Col>
                <Col>
                    <div className="d-flex align-items-center">
                        <h3>{book.name}</h3>
                        <h4 className="mx-3 text-secondary">
                            {book.bookCover} - {book.publishedDate}
                        </h4>
                    </div>
                    <div>
                        <div className="mb-4">
                            by{' '}
                            <Link to={`/author/${book.author.id}`} state={{ author: book.author }}>
                                {book.author.name}
                            </Link>
                        </div>
                        <p>
                            <b>Publisher:</b> {book.publishedBy}
                        </p>
                        <p>
                            <b>Language:</b> {book.language}
                        </p>
                        <p>
                            <b>Total pages:</b> {book.pageNumbers}
                        </p>

                        <div>
                            <b>Short description:</b>
                            {/* <p>{book.shortDescription}</p> */}
                            {book.shortDescription ? (
                                book.shortDescription
                                    .split('<br/>')
                                    .map((str, index) => <p key={index}>{str}</p>)
                            ) : (
                                <></>
                            )}
                            {/* {book.shortDescription} */}
                            {/* <p className="mt-3">{book.shortDescription}</p> */}
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="my-5">
                <hr />
            </div>
            <div>
                <h3 className="mb-4">Same author</h3>
                <div className="d-flex">
                    {books
                        .filter((eachBook) => eachBook.id !== book.id)
                        .map((bookData) => (
                            <Link
                                to={`/book/${bookData.id}`}
                                key={bookData.id}
                                state={{ book: bookData }}
                                className="text-dark me-5"
                            >
                                <Card style={{ width: '10rem' }} className="mb-5 border-0">
                                    <Card.Img
                                        variant="top"
                                        src={bookData.image.link}
                                        style={{ height: 230 }}
                                    />
                                    <Card.Body className="p-0">
                                        <h6 className="text-center">{bookData.name}</h6>
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default BookDetail;
