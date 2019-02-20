import React from 'react'
import PropTypes from 'prop-types'

function BookCover(props) {
    return (
        <div 
            className="book-cover" 
            style={{ width: props.width, height: props.height, backgroundImage: `url(${props.thumbnail})` }}>
        </div>
    )
}

BookCover.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default BookCover