import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

const error = useRouteError();
console.log(error)

    return (
        <div>
            <h2>Oops!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
<h3>Page is not found</h3>
<p>Go back where you from</p>

<Link to="/" >

<div>
<button>Go Back</button>

</div>
</Link>

                    </div>
            }
        </div>
    );
};

export default ErrorPage;