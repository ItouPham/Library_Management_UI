import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

const BookDetail = (props) => {
    const navigate = useNavigate();
    const [book, setBook] = useState({ image: { link: '' } });
    const { state } = useLocation();
    const { bookId } = useParams();

    useEffect(() => {
        if (state === null) {
            getBookById().then((data) => setBook(data.book));
        } else {
            setBook(state.book);
        }
    }, []);

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

    return (
        <Container>
            <h1 className="text-center my-5">Book Detail</h1>
            <Row>
                <Col md={3}>
                    <img src={book.image.link} alt="" style={{ width: 270 }} />
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
                            by <Link>Author</Link>
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
                        <p>
                            <b>Short description:</b>
                            <span className="mt-3">{book.shortDescription}</span>
                        </p>
                    </div>
                </Col>
            </Row>
            <hr />
            <div>
                <h3>Same author</h3>
                <Row>
                    
                </Row>
            </div>
        </Container>
    );
};

export default BookDetail;
