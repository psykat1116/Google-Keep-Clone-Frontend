import React from 'react'

const Unauthorise = () => {
    document.title = "Unauthorise 401 ❌❌❌"
    return (
        <div id='error'>
            <div className="errormsg">
                <h1>401</h1>
                <p>
                    Unauthorized Access We're sorry, but you do not have the necessary permissions to access the requested content.This area of the website is restricted to authorized users only.
                    <br/>
                    Please login to your account using correct login credentials or sign up for a new account and after that your account has the appropriate permissions for the content you are trying to access.
                </p>
            </div>
        </div>
    )
}

export default Unauthorise