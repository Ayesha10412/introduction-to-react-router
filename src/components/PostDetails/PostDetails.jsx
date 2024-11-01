import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import '../Header/Header.css'
const PostDetails = () => {
    const post = useLoaderData();
    const {body,id} = post
let {postId}=useParams()
console.log(postId)
const navigate  = useNavigate()
const handleGoBack =()=>{

navigate(-1);
}

    return (
        <div className='postDetail'>
            <h3>Post Id: {id} </h3>
            <p>Body: {body}</p>
            <button onClick={handleGoBack} >Go Back</button>
        </div>
    );
};

export default PostDetails;