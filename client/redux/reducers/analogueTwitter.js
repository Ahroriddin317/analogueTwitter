import axios from 'axios';

const GET_POSTS = 'GET_POSTS';
const GET_USER = 'GET_USER';
const UPDATE_POST = 'UPDATE_POST';

const inicialState = {
  user: {},
  posts: [],
}

export default (state = inicialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.posts }

    case GET_USER:
      return { ...state, user: action.user }

    case UPDATE_POST:
      return { ...state, posts: state.posts.map((post) => post.id === action.post.id ? action.post : post) }

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

export const getUser = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:9999/api/user/${id}`).then(({ data: user }) => dispatch({ type: GET_USER, user }));
  }
}

export const like = (id, likes, liked) => {
  return (dispatch) => {
    axios.post('http://localhost:9999/api/posts/like', {
      id,
      likes,
      liked
    }).then(({ data: post }) => dispatch({ type: UPDATE_POST, post }))
  }
}