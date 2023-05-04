import classNames from 'classnames/bind';
import styles from './Author.module.scss';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const cx = classNames.bind(styles);
const Author = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/author')
            .then((response) => {
                setAuthors(response.data.authors);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Container>
                <h1>Author page</h1>
                {authors.map((author) => (
                    <div key={author.id} className="d-flex align-items-center">
                        <h3 className="me-2">Name:</h3>
                        <p className="m-0">{author.name}</p>
                    </div>
                ))}
            </Container>
        </>
    );
};

export default Author;
