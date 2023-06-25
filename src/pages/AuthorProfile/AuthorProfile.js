import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './AuthorProfile.module.scss';

const cx = classNames.bind(styles);
const AuthorProfile = () => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState({ id: '', name: '', avatar: { link: '' } });
    const [books, setBooks] = useState([]);
    const { authorId } = useParams();

    useEffect(() => {
        getAuthorById().then((data) => {
            setAuthor(data.author);
            getBooksByAuthorId().then((response) => setBooks(response.books));
        });
    }, []);

    const getAuthorById = () => {
        return fetch(`/author/${authorId}`, {
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

    const getBooksByAuthorId = () => {
        return fetch(`/book/author/${authorId}`, {
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
        <div className={cx('wrapper')}>
            <h1 className="text-center p-5">{author.name}</h1>
            <Container className="bg-white">
                <div className="py-5 ">
                    <div className="w-100 d-flex justify-content-center">
                        <Row className="w-75">
                            <Col md={4}>
                                <img src={author.avatar.link} alt="" />
                            </Col>
                            <Col>
                                <h3>About the Author</h3>
                                {author.about}
                            </Col>
                        </Row>
                    </div>

                    <hr />
                    <div className="my-5 px-5">
                        <h3>Books</h3>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AuthorProfile;
