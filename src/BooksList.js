import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BooksList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        const { books, onShelfChange } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfType='currentlyReading' shelfName='Currently Reading' books={books} onShelfChange={onShelfChange} />
                        <BookShelf shelfType='wantToRead' shelfName='Want to Read' books={books} onShelfChange={onShelfChange} />
                        <BookShelf shelfType='read' shelfName='Read' books={books} onShelfChange={onShelfChange} />
                    </div>
                </div>
                <Link
                    className="open-search" 
                    to='/search'>Add a Book</Link>
            </div>
        )
    }
}

export default BooksList