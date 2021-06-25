import React from 'react'

import {Card, Button} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {deletePost} from '../redux/actions/actions'

const PostCard = ({postItem}) => {

    const dispatch = useDispatch();

    return (

        <div className="col-lg 3 col-md-3 col-sm-12 col-xs-12 mx-4 mb-3">
          
            <Card style={{ width: '20rem'}}>
              <Card.Img variant="top" src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`} alt={postItem.title} />
              <Card.Body>
                <Card.Title>{postItem.title}</Card.Title>
                <Card.Text>
                  {postItem.body}
                </Card.Text>

                <div className="mb-2">
                  <Button 
                    as={Link} 
                    to={`/updatePost/${postItem.id}`} 
                    variant="warning" 
                    style={{width:'8rem',marginRight:'20px'}}
                  >
                    Edit
                  </Button>

                  <Button 
                    as={Link} 
                    onClick={() => dispatch(deletePost(postItem.id))} 
                    variant="danger" 
                    style={{width:'8rem'}}
                  >
                    Delete
                  </Button>
                </div>

                <Button 
                  as={Link} 
                  to={`/post/${postItem.id}`} 
                  variant="primary" 
                  className="w-100"
                >
                  Read More 
                </Button>
              </Card.Body>
            </Card>
          
        </div>
    )
}

export default PostCard;
