import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';

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
    <div className="page-container">
      <div className="card">
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
        <div style={{ marginTop: '1.5rem' }}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            style={{ marginBottom: '1rem' }}
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      </div>
      <div className="card">
        <h2>Comments by some other users</h2>
        <ol>
          {sampleComments.map((comment, index) => (
            <li key={index}>
              {index + 1}. {comment.username} - {comment.comment} (Rating: {comment.rating})
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Comments;
