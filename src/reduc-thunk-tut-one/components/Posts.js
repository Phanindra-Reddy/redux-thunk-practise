import React,{useEffect} from "react";
import PostCard from "./Card";
import { useSelector, useDispatch } from "react-redux";

import {getAll} from '../redux/actions/actions';

const Posts = () => {

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts);

  useEffect(()=>{
    dispatch(getAll())
  },[])


  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;