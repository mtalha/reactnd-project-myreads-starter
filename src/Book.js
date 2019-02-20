import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';
import BookCover from './BookCover';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };
    render() {
        const {book} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover width={128} height={193} thumbnail={book.imageLinks.thumbnail} />
                    <BookShelfChanger currentShelf={book.shelf !== undefined ? book.shelf : ''} onShelfChange={this.props.onShelfChange} book={book} />
                </div>
                <BookTitle title={book.title} />
                <BookAuthors authors={book.authors} />
            </div>
        )
    }
}

export default Book