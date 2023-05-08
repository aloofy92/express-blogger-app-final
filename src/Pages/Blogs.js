
import BlogCard from '../Components/BlogCard';

import React  from 'react';

import { Link } from 'react-router-dom';

export default function Blogs() {

    return (

        <div className='blog-area'>

            <div className='banner'>

                <h1>Blogger!</h1>

                <button className='create-new-blog-button'>

                    <Link to='/create-new-blog'>Click to create a new blog!</Link>

                </button>

            </div>

            <BlogCard />

        </div>
    );
}