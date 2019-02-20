import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class SearchBooks extends Component {

    static propTypes = {
        shelfBooks: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    state = {
        query: '',
        searchResults: []
    }

    updateQuery = (query) => {
        this.setState((currentState) => ({
            query: query,
            searchResults: query ? currentState.searchResults : []
        }))
        
        if (query) {
            BooksAPI.search(query)
            .then((books) => {
                if (books!== undefined && books.length >= 0) {
                    for (var searchedBook of books) {
                        searchedBook.shelf = 'none'
                        for (const shelfBook of this.props.shelfBooks) {
                            if (searchedBook.id === shelfBook.id) {
                                searchedBook.shelf = shelfBook.shelf
                                break
                            }
                        }
                    }
                }
                this.setState(() => ({
                    searchResults: books
                }))
            })    
        } else {
            // just for clearing older results
            this.setState(() => ({
                searchResults: []
            }))
        }
        
        
    };

    render() {
        const { query, searchResults } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        className="close-search" 
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResults!==undefined && searchResults.length > 0 && searchResults.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onShelfChange={this.props.onShelfChange} />
                            </li>
                        ))
                        }
                        {(searchResults === undefined || searchResults.length < 1) &&  
                                <li >
                                    <p>No books found</p>
                                </li>
                            
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks