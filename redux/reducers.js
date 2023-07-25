// redux/reducers.js
import Posts from '../data/posts.json'

const initialState = {
  posts: Posts,
};

const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, { ...action.payload, id: Date.now(), comments: [] }],
      };
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post)),
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, {"comment": action.payload.comment, "userName": action.payload.userName}] }
            : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;