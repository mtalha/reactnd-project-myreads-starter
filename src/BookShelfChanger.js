import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component to change the book shelf.
 * Wrapper around an HTML select tag for shelf menu.
 */
class BookShelfChanger extends Component {

    static propTypes = {
        currentShelf: PropTypes.string.isRequired,
        onShelfChange: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    handleChange = event => {
        var bookForShelfChange = this.props.book
        bookForShelfChange.shelf = event.target.value
        this.props.onShelfChange(bookForShelfChange)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={this.props.currentShelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;