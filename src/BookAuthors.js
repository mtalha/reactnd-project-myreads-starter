import React from 'react';
import PropTypes from 'prop-types';

function BookAuthors (props) {
    return (
        <div className="book-authors">{props.authors !== undefined && props.authors.length> 0 ? props.authors[0] : ''}</div>        
    )
}

BookAuthors.propTypes = {
    authors: PropTypes.array.isRequired
}

export default BookAuthors