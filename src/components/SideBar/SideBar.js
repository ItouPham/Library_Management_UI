import classNames from 'classnames/bind';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);
const SideBar = (props) => {
    const { categoryId } = useParams();
    return (
        <Nav className="me-auto d-flex flex-column">
            <h2 className="text-center my-3">CATEGORIES</h2>
            {props.categories.map((category) => (
                <Link
                    to={`/book/category/${category.id}/1`}
                    key={category.id}
                    className={cx(`${category.id === categoryId ?'text-success fw-bold' :'text-dark'} mt-3 mb-2 ms-4`, 'navItem')}
                >
                    {category.name}
                </Link>
            ))}
        </Nav>
    );
};

export default SideBar;
