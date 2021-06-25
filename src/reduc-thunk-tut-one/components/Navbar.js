import React from 'react';

import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (

        <div>
            <Navbar bg="light" expand="lg" sticky="top" >
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center justify-content-center mr-auto mx-4">
                    Redux Thunk Posts
                </Navbar.Brand>

                <Nav>
                    <Nav.Link as={Link} to="/addPost" className="mx-3 p-1 btn btn-dark text-white">
                        Add Post
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
        
    )
}

export default NavBar;
