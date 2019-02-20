import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {

    static propTypes = {
        shelfType: PropTypes.string.isRequired,
        shelfName: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };
    render() {
      const { shelfType, shelfName, books } = this.props
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfName}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf === shelfType).map((book) => (
                        <li key={book.id}>
                            <Book book={book} onShelfChange={this.props.onShelfChange}/>
                        </li>  
                    ))
                    }
                </ol>
              </div>
            </div>
        )
    }
}

export default BookShelf