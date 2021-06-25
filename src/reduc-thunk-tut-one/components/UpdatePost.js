import React, { useState, useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import {getPost, updatePost} from '../redux/actions/actions'
import {useParams, useHistory} from 'react-router-dom'

const UpdatePost = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const post = useSelector((state) => state.post.post);

    console.log(post);

    useEffect(()=>{
        loadPost();
    },[])

    useEffect(()=>{
        if(post){
            setTitle(post.title)
            setBody(post.body);
        }
    },[post])

    const loadPost = () => {
        dispatch(getPost(id))
    }

    const submitForm = (e) => {
        e.preventDefault();
        const update_post = {
          id: post.id,
          title: title,
          body: body,
        };
    
        dispatch(updatePost(update_post));
        history.push("/");
    };

    return (
        <div className="container">
          <div className="py-4">
            <div className="card shadow">
              <div className="card-header">Update Post</div>
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
                  <button type="submit" className="btn btn-primary btn-lg">Update Post</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default UpdatePost;
