import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../redux/reducers/analogueTwitter';

const AddPost = () => {
  const { user } = useSelector(s  => s.analogueTwitter)
  const dispatch = useDispatch()
  const [textareaValue, setTextareaValue] = useState('')

  const buttonHandler = (e) => {
    e.preventDefault();
    if(textareaValue.trim() !== '') {
      dispatch(addNewPost(user.id, `${user.firstName} ${user.lastName}`, textareaValue))
      setTextareaValue('')
    }
    return
  }
  return (
    <form className="addPost" onSubmit={buttonHandler}>
      <h1>{user.firstName}</h1>
      <textarea
      type="text"
      placeholder='Write...'
      value={textareaValue}
      onChange={({target}) => setTextareaValue(target.value)}
      />
      <button>
        post
      </button>
    </form>
  )
}

export default AddPost;