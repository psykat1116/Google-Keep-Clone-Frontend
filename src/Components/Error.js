import React from 'react'

const Error = () => {
    document.title = "Error 404 😵"
    return (
        <div id='error'>
            <div className="errormsg">
                <h1>404</h1>
                <p>
                    Not Found.<br/>
                    The requested URL was not found on this server.
                </p>
            </div>
        </div>
    )
}

export default Error