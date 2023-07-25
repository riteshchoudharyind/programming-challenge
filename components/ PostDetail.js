// PostDetail.js
import React from 'react';

import { useSelector } from 'react-redux';

const PostDetail = ({ postId }) => {
  const reduxPosts = useSelector((state) => state.posts.posts);

  const post = reduxPosts.find((post) => post.id == postId);
  
  return (
    <div className='container'>
      <div className='post-detail'>
        <div className="row">
          <h1>{post?.title}</h1>
          <p>Publication Date: {post?.publicationDate}</p>
          <p>{post?.content}</p>
        </div>
        <hr />
      
        <div className='row'>
          <h2>Comments</h2>
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index}>
                <strong>author:{comment?.userName}</strong>
                <p>comment: {comment?.comment}</p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default PostDetail;