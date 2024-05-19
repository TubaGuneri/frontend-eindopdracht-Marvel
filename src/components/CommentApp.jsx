import {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../context/AuthContext.jsx";


// eslint-disable-next-line react/prop-types
const CommentApp = ({id, addComment,pageName, title}) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const storageKey = id ? `comments-${id}` : 'allComments';
        const savedComments = JSON.parse(localStorage.getItem(storageKey)) || [];
        setComments(savedComments);
    }, [id]);


    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            let text =  user.username + ":" + comment + `(${pageName} - ${title})`;
            const newComment = {id: Date.now(), text:text, userId: id || 'general'};
            const newComments = [...comments, newComment];
            setComments(newComments);
            const storageKey = id ? `comments -${id}` : 'allComments';
            localStorage.setItem(storageKey, JSON.stringify(newComments));

            const allComments = JSON.parse(localStorage.getItem('allComments')) || [];
            allComments.push(newComment);
            localStorage.setItem('allComments', JSON.stringify(allComments));

            setComment('');
        }
    };
    return (
        <>
            {addComment ? (<div>
                <h1>Review</h1>
                <form onSubmit={handleCommentSubmit}>
        <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Schrijf je review hier..."
        />
                    <button type="submit">Plaatsen</button>
                </form>

            </div>) : ""}

            <div>
                <h2>Reviews</h2>
                <ul>
                    {comments.map(({id, text}) => (
                        <li key={id}>{text}</li>
                    ))}
                </ul>
            </div>

        </>


       );
};

export default CommentApp;