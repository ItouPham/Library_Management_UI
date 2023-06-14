import classNames from 'classnames/bind';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);
const SideBar = (props) => {
    return (
        <Nav className="me-auto d-flex flex-column">
            <h2 className="text-center my-3">CATEGORIES</h2>
            {props.categories.map((category) => (
                <Link
                    to="/"
                    key={category.id}
                    className={cx('text-dark mt-3 mb-2 ms-4', 'navItem')}
                >
                    {category.name}
                </Link>
            ))}
        </Nav>
    );
};

export default SideBar;
