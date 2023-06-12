import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { Button, Card, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);
const Book = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        fetch('book', { headers: { 'Content-Type': 'application/json' }, method: 'GET' })
            .then((response) => response.json())
            .then((data) => setBook(data.books));
    }, []);

    return (
        <>
            {console.log(books)}
            <Container>
                <h1>Book page</h1>
                <div className="d-flex flex-wrap justify-content-between">
                    {books.map((book) => (
                        <Card key={book.id} style={{ width: '18rem' }} className="mb-5">
                            <Card.Img variant="top" src={book.image.link} style={{ height: 400 }} />
                            <Card.Body>
                                <Card.Title>{book.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Book;
