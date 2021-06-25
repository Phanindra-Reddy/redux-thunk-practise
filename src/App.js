import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './reduc-thunk-tut-one/components/Navbar';
import Home from './reduc-thunk-tut-one/components/Home';
import AddPost from './reduc-thunk-tut-one/components/AddPost';
import Post from './reduc-thunk-tut-one/components/Post';
import UpdatePost from './reduc-thunk-tut-one/components/UpdatePost';


const App = () => {
    return (
        <div>
         
          <Router>

            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/addPost" component={AddPost} />
                <Route exact path="/post/:id" component={Post} />
                <Route exact path="/updatePost/:id" component={UpdatePost} />
            </Switch>
          </Router>

        </div>
    )
}

export default App;
