// redux/actions.js
export const addPost = (post) => {
    return {
      type: 'ADD_POST',
      payload: post,
    };
  };
  
  export const editPost = (post) => {
    return {
      type: 'EDIT_POST',
      payload: post,
    };
  };

  export const addComment = (comment) => {
    return {
      type: 'ADD_COMMENT',
      payload: comment
    }
  }
