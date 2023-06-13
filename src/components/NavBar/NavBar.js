import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" className='p-3'>
                <Container>
                    <Link to="/" className={cx('text-white me-4', 'navItem')}>
                        LOGO
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/" className={cx('text-white mx-2', 'navItem')}>
                            Home
                        </Link>

                        <Link to="/book" className={cx('text-white mx-2', 'navItem')}>
                            Book
                        </Link>

                        <Link to="/author" className={cx('text-white mx-2', 'navItem')}>
                            Author
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
