import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);
const Book = () => {
    return (
        <>
            <Container>
                <h1 className={cx('wrapper')}>Book page</h1>
            </Container>
        </>
    );
};

export default Book;
