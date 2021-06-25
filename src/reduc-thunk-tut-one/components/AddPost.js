import React,{useState} from 'react'

import {useHistory} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {createPost} from '../redux/actions/actions';

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();

        const newPost = {
            id:uuidv4(),
            title:title,
            body:body,
        }

        dispatch(createPost(newPost));
        history.push('/');

    }

    return (
    <div className="container">
      <div className="py-4">
        <div className="card shadow">
          <div className="card-header">Add A Post</div>
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg my-2"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control form-control-lg my-2"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Add New Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AddPost;
