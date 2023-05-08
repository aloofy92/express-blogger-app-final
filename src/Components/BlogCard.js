
import React  from 'react';

import { useState, useEffect } from 'react';


import { Link } from 'react-router-dom';


import axios from 'axios';


const urlEndpoint = 'http://localhost:3000/blogs';


export default function BlogCard() {

    const [blog, setBlogs] = useState([]);

            useEffect(() => {

        axios.get(`${urlEndpoint}/all`).then((response) => {

            setBlogs(response.data.blog);

        });
    }, []);

    return (

        <div className='blog-card'>

            {blog.map((blog) => (

                <div key={blog.id}>

                    <Link to={`/blogs/${blog.id}`}>
            
                        <h1>{blog.title}</h1>

                    </Link>

                    <br/>

                    <h2>by {blog.author}</h2>

                    <br/>

                    <p>{blog.text}</p>

                    <br/>

                </div>

            ))}

        </div>

    );

}