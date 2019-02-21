import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

function BooksList(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf shelfType='currentlyReading' shelfName='Currently Reading' books={props.books} onShelfChange={props.onShelfChange} />
                    <BookShelf shelfType='wantToRead' shelfName='Want to Read' books={props.books} onShelfChange={props.onShelfChange} />
                    <BookShelf shelfType='read' shelfName='Read' books={props.books} onShelfChange={props.onShelfChange} />
                </div>
            </div>
            <Link
                className="open-search"
                to='/search'>Add a Book</Link>
        </div>
    )
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BooksList