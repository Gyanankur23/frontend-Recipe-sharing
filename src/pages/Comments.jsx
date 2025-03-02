import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const sampleComments = [
    {
      recipeId: 1,
      userId: 101,
      username: "SpiceKing",
      comment: "Chicken Biryani turned out delicious with the perfect mix of spices!",
      rating: 5
    },
    {
      recipeId: 2,
      userId: 102,
      username: "VeggieQueen",
      comment: "Loved the simplicity and taste of Aloo Gobi. Perfect comfort food!",
      rating: 4
    },
    {
      recipeId: 3,
      userId: 103,
      username: "SweetTooth",
      comment: "Gulab Jamun was soft, syrupy, and delightful. Great recipe!",
      rating: 5
    },
    {
      recipeId: 4,
      userId: 104,
      username: "DalLover",
      comment: "Masoor Dal is hearty, wholesome, and so easy to make!",
      rating: 4
    },
    {
      recipeId: 5,
      userId: 105,
      username: "PaneerFan",
      comment: "Paneer Tikka Masala had just the right balance of smoky and creamy flavors!",
      rating: 5
    }
  ];

  const fetchComments = () => {
    const filteredComments = sampleComments.filter(comment => comment.recipeId === recipeId);
    setComments(filteredComments);
  };

  const handleAddComment = () => {
    const newCommentData = {
      recipeId,
      userId: Date.now(),
      username: "NewUser",
      comment: newComment,
      rating: 5
    };
    setComments([...comments, newCommentData]);
    setNewComment('');
  };

  useEffect(() => {
    fetchComments();
  }, [recipeId]);

  return (
    <div>
      <h3 style={{ fontSize: '2em', color: '#ff5733' }}>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} style={{ fontSize: '1.5em' }}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
        style={{ fontSize: '1.5em' }}
      />
      <button onClick={handleAddComment} style={{ fontSize: '1.5em' }}>Submit</button>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ fontSize: '2.5em', color: '#ff5733', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)' }}>
          Comments by some other users
        </h2>
        <ol style={{ listStyleType: 'decimal', padding: 0, textAlign: 'left' }}>
          {sampleComments.map((comment, index) => (
            <li key={index} style={{ fontSize: '1.2em', color: '#000000', margin: '1rem 0', fontWeight: 'bold' }}>
              {index + 1}. {comment.username} - {comment.comment} (Rating: {comment.rating})
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Comments;
