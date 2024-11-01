import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone}= user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
<Link to={`/user/:${id}`} >Show Details</Link>
<Link to={`/user/${id}`} >
<button>Click Me</button>
</Link>
{/* <Link to={`/user/${username}`} >
<button>Click</button>
</Link> */}
        </div>
    );
};

export default User;