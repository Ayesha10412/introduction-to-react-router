import { useLoaderData } from 'react-router-dom';
import '../Header/Header.css'
const PostDetails = () => {
    const post = useLoaderData();
    const {body} = post
    return (
        <div className='postDetail'>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetails;