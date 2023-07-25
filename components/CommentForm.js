// components/CommentForm.js
import React, { useState } from 'react';
import Notification from './Notification';
import { addComment } from '../redux/action';
import { useDispatch } from 'react-redux';
import { useAuth } from '../auth';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [notification, setNotification] = useState('');
 
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the comment data (add your own validation logic here)
    // If validation passes, save the comment to the API or database
    // Optionally, trigger the notification system for the post owner
    // Clear the comment input after submission
  
    dispatch(addComment({"comment":  comment, "userName": user.email, "postId": postId}));
    setComment('');
    
    // For this example, show a notification with the message
    setNotification('New comment added successfully!');
    // router.push('/')

  };

  const closeNotification = () => {
    setNotification('');
  };

  return (
    <div className='container'>
    <div className='post-detail'>

      <div className='row'>

      <form onSubmit={handleSubmit} className='commentForm'>
        <textarea className='inputField'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment"
        />
      <button type="submit" className='addcommentbtn'>Submit Comment</button>
      {notification && <Notification message={notification} onClose={closeNotification} />}
    </form>
      </div>
    </div>
    </div>
   
  );
};

export default CommentForm;