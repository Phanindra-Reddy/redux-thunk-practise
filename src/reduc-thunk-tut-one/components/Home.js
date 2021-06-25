import React from 'react';
import Posts from './Posts';

const Home = () => {
    return (
        <div className="container">
            <h5 className="text-center">Redux Async Operations using Thunk Middleware</h5>
            <div className="py-4">
                <Posts />
            </div>
        </div>
    )
}

export default Home;
