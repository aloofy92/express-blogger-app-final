import React  from 'react';

import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';



const urlEndpoint = 'http://localhost:3000/blogs';

export default function NewPost() {

  const [newblog, setNewBlog] = useState({

    _id: '',

    title: '',

    text: '',

    author: '',

    createdAt: '',

    lastModified: '',

    categories: [],

  });

  const { id } = useParams();

  const navigate = useNavigate();
  
  const [editMode, setEditBlog] = useState(false);
  
  useEffect(() => {

    axios.get(`${urlEndpoint}/get-one/${id}`).then((response) => {

      setNewBlog(response.data.post);

    });
  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    const newForm = new newForm(e.target);
    
    const updateBlog = {

      title: newForm.get('title'),

      text: newForm.get('text'),

      author: newForm.get('author'),

      year: newForm.get('year'),

      categories: [], 
    };
    
    await axios.put(`${urlEndpoint}/update-one/${id}`, updateBlog);

    navigate(`/blogs/${id}`);

  };

  const handleDelete = async () => {

    await axios.delete(`${urlEndpoint}/delete-one/${id}`);

    navigate('/blogs');

  };

  if (!newblog) {

    return <div>processing...</div>;
  }
    return (
        <div className='edit-blog-post'>

          {editMode ? (

            <form onSubmit={handleSubmit} className="edit-post">

              <label htmlFor='title'>Title:</label>
              <br/>
              <input 
              type='text'
               id='title' 
               name='title' 
               defaultValue={newblog.title} 
               />

              <label htmlFor='text'>Text:</label>
             <br/>
              <textarea 
              id='text' 
              name='text' 
              defaultValue={newblog.text}>
              </textarea>

              <label htmlFor='author'>Author:</label>
            <br/>
              <input 
              type='text'
               id='author' 
               name='author' 
               defaultValue={newblog.author} />

              <label htmlFor='year'>Year:</label>
            <br/>
              <input 
              type='text'
               id='year' 
               name='year' 
               defaultValue={newblog.year} />


            <br/>
              <button type='submit'>Save</button>

            </form>
          ) : (
            <>
              <h1>{newblog.title}</h1>

              <h2>author: {newblog.author}</h2>

              <p>{newblog.text}</p>

              <p>{newblog.year}</p>

              <button onClick={() => setEditBlog(true)}>Edit</button>

              <button onClick={handleDelete}>Delete</button>
              
            </>
          )}
          
          
        </div>
      );
    }