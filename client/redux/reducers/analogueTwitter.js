import axios from 'axios'

const GET_POSTS = ' GET_POSTS';

const inicialState = {
  posts: [],
}

export default (state = inicialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.posts }

    default: {
      return state
    }
  }
}

export const getPosts = () => {
  return (dispatch) => {
  axios.get('http://localhost:9999/api/posts').then(({ data: posts }) => dispatch({ type: GET_POSTS, posts }));
  }
}