import  { useState, useEffect } from 'react';


// eslint-disable-next-line react/prop-types
const CommentApp = ({ id }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // op basis van ID haal reviews op en reviews schrijven
        const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            const newComment = { id: Date.now(), text: comment };
            const newComments = [...comments, newComment];
            setComments(newComments);
            localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
            setComment('');
        }
    };

    return (
        <div>
            <h1>Review</h1>
            <form onSubmit={handleCommentSubmit}>
        <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Naam: schrijf je review hier..."
        />
                <button type="submit">Plaatsen</button>
            </form>
            <div>
                <h2>Reviews</h2>
                <ul>
                    {comments.map(({ id, text }) => (
                        <li key={id}>{text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CommentApp;