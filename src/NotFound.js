import React from 'react'

const NotFound = ({location}) => (
    
        <div className="not-found">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            You entered an invalid URL {location.pathname}
        </div>
    )
    
export default NotFound