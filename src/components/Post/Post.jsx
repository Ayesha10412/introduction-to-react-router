import { Link, useNavigate } from 'react-router-dom';
import '../Header/Header.css';
const Post = ({post}) => {
    const {title, id} = post

    const navigate = useNavigate();
const handleShowDetail = ()=>{
navigate(`/post/${id}`);
}

    return (
        <div className='user'>
            <h2>Post of Id: {id} </h2>
            <p>Title: {title} </p>

            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`} ><button>Show Details</button></Link>
            <button onClick={handleShowDetail}>Click on details</button>
        </div>
    );
};

export default Post;