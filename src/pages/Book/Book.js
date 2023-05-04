import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);
const Book = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/book').then((response) => {
            setBook(response.data.books);
        });
    }, []);
    return (
        <>
            <Container>
                <h1>Book page</h1>
                {books.map((book) => (
                    <div key={book.id} className="d-flex align-items-center">
                        <h3>Name:</h3>
                        <p className="m-0">{book.name}</p>
                    </div>
                ))}
            </Container>
        </>
    );
};

export default Book;
