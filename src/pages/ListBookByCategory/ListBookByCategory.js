import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Pagination, Row } from 'react-bootstrap';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

const ListBookByCategory = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({ id: '', name: '' });
    const [totalPages, setTotalPages] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    const { categoryId, page } = useParams();

    useEffect(() => {
        if (categoryId === 'new-book') {
            getAllBooks(page).then((data) => {
                setBooks(data.books);
                setTotalPages(data.totalPages);
                setCategories(data.categories);
            });
        } else {
            getBooksByCategoryId(categoryId, page).then((data) => {
                setBooks(data.books);
                setTotalPages(data.totalPages);
                setCategories(data.categories);
                setCategory(data.categories.find((value) => value.id === categoryId));
            });
        }
    }, [page]);

    const getBooksByCategoryId = (id, page) => {
        return fetch(`/book/category/${id}?page=${page}&size=15`, {
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

    const getAllBooks = (page) => {
        return fetch(`/book?page=${page}&size=15`, {
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

    const getPaginationBtn = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <Pagination.Item
                    key={i}
                    active={i === Number(page)}
                    onClick={() => navigate(`/book/category/${categoryId}/${i}`)}
                >
                    {i}
                </Pagination.Item>,
            );
        }
        return pages;
    };

    return (
        <Container className="mt-5">
            <h2 className="d-block h2 text-dark text-center my-5">
                {categoryId === 'new-book' ? 'New ' : category.name + ' '}Books
            </h2>
            <Row>
                <Col md={3}>
                    <Col className="w-100 border border-2">
                        <SideBar categories={categories} />
                    </Col>
                </Col>
                <Col md={9}>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 12rem)',
                        }}
                    >
                        {books.map((book) => (
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
                                        style={{ height: 240 }}
                                    />
                                    <Card.Body className="p-0">
                                        <h5>{book.name}</h5>

                                        {/* <Card.Title>{book.name}</Card.Title> */}
                                        {/* <Card.Text>
                                                        Some quick example text to build on the card title and make up
                                                        the bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <Pagination className="justify-content-center my-5">
                        <Pagination.First
                            onClick={() => navigate(`/book/category/${categoryId}/1`)}
                            disabled={Number(page) === 1}
                        />
                        <Pagination.Prev
                            onClick={() =>
                                navigate(`/book/category/${categoryId}/${Number(page) - 1}`)
                            }
                            disabled={Number(page) === 1}
                        />
                        {/* <Pagination.Ellipsis /> */}
                        {getPaginationBtn()}
                        {/* <Pagination.Ellipsis /> */}
                        <Pagination.Next
                            onClick={() =>
                                navigate(`/book/category/${categoryId}/${Number(page) + 1}`)
                            }
                            disabled={Number(page) === totalPages}
                        />
                        <Pagination.Last
                            onClick={() => navigate(`/book/category/${categoryId}/${totalPages}`)}
                            disabled={Number(page) === totalPages}
                        />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default ListBookByCategory;
