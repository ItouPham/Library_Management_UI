import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

const BookDetail = (props) => {
    const navigate = useNavigate();
    const [book, setBook] = useState({});
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
            {console.log(book)}
            <h1>Book Detail</h1>
            <h3>Name</h3>
            <h4>{book.name}</h4>
        </Container>
    );
};

export default BookDetail;
