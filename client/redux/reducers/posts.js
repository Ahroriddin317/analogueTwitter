const GET_POSTS = ' GET_POSTS';

const inicialState = {
  posts: []
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