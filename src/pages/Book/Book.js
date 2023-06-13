import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { Button, Card, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Book = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        fetch('book?size=30', { headers: { 'Content-Type': 'application/json' }, method: 'GET' })
            .then((response) => response.json())
            .then((data) => setBook(data.books));
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
                    <h2 className="text-center mb-4 mt-5">New Books</h2>
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
                                        <h6>{book.name}</h6>

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
                </div>

                <div>
                    <h2 className="text-center mb-4">Horror Books</h2>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 13rem)',
                        }}
                    >
                        {filterByCategory('Horror')
                            .slice(0, 6)
                            .map((book) => (
                                <Card
                                    key={book.id}
                                    style={{ width: '10rem' }}
                                    className="mb-5 border-0"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={book.image.link}
                                        style={{ height: 230 }}
                                    />
                                    <Card.Body className="p-0">
                                        <h6>{book.name}</h6>
                                        {/* <Card.Title>{book.name}</Card.Title> */}
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-center mb-4">Classics Books</h2>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 13rem)',
                        }}
                    >
                        {filterByCategory('Classics')
                            .slice(0, 6)
                            .map((book) => (
                                <Card
                                    key={book.id}
                                    style={{ width: '10rem' }}
                                    className="mb-5 border-0"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={book.image.link}
                                        style={{ height: 230 }}
                                    />
                                    <Card.Body className="p-0">
                                        <h6>{book.name}</h6>
                                        {/* <Card.Title>{book.name}</Card.Title> */}
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-center mb-4">Action and Adventure Books</h2>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 13rem)',
                        }}
                    >
                        {filterByCategory('Action and Adventure')
                            .slice(0, 6)
                            .map((book) => (
                                <Card
                                    key={book.id}
                                    style={{ width: '10rem' }}
                                    className="mb-5 border-0"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={book.image.link}
                                        style={{ height: 230 }}
                                    />
                                    <Card.Body className="p-0">
                                        <h6>{book.name}</h6>
                                        {/* <Card.Title>{book.name}</Card.Title> */}
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-center mb-4">Fantasy Books</h2>
                    <div
                        className="d-grid justify-content-between"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fill, 13rem)',
                        }}
                    >
                        {filterByCategory('Fantasy')
                            .slice(0, 6)
                            .map((book) => (
                                <Card
                                    key={book.id}
                                    style={{ width: '10rem' }}
                                    className="mb-5 border-0"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={book.image.link}
                                        style={{ height: 230 }}
                                    />
                                    <Card.Body className="p-0">
                                        <h6>{book.name}</h6>
                                        {/* <Card.Title>{book.name}</Card.Title> */}
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Book;
