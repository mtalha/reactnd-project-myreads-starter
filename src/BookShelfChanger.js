import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * TODO: this requires state management I guess
 */
class BookShelfChanger extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedShelf: props.currentShelf,
            book: props.book
        }
    }
    static propTypes = {
        currentShelf: PropTypes.string.isRequired,
        onShelfChange: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    handleChange = event => {
        this.setState({ selectedShelf: event.target.value })
        var bookForShelfChange = this.props.book
        bookForShelfChange.shelf = event.target.value
        this.props.onShelfChange(bookForShelfChange)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={this.state.selectedShelf} onChange={this.handleChange}>
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