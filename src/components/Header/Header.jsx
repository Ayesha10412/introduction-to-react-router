import { Link, useLoaderData } from 'react-router-dom';
import './Header.css';
const Header = () => {
    // const user = useLoaderData();
    // const {username} = user;
    return (
        <div>
            <h2>Navbar</h2>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/users">Users</Link>
         <Link to="/posts" >Posts</Link>
{/* <h1> {username} </h1> */}

            </nav>
        </div>
    );
};

export default Header;