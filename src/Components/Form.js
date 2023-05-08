import React  from 'react';

import { useState } from 'react';

import axios from 'axios';

const urlEndpoint = 'http://localhost:3000/blog';

export default function Form() {
    
  const [newForm, setNewForm] = useState({

    title: '',

    author: '',

    text: '',

    year: '',

    categories: [],

  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(`${urlEndpoint}/create-one`, newForm);

  };

  return (

    <form onSubmit={handleSubmit} className="new-blog-form">
      <br/>
      <h1>Add Blog Here</h1>
      <br/>
      <label htmlFor='title'>Blog Title:</label>
      <br/>
      <input 
      type='text' 
      id='title' 
      name='title' 
      value={newForm.title} 
      onChange={(e) => setNewForm({ ...newForm, title: e.target.value })} 
      />
      <br/>
      <label htmlFor='text'>Blog Text:</label>
      <textarea 
      id='text' 
      name='text' 
      value={newForm.text} 
      onChange={(e) => setNewForm({ ...newForm, text: e.target.value })}>
      </textarea>
      <br/>
      <label htmlFor='author'>Author:</label>
      <input type='text' id='author' name='author' value={newForm.author} 
      onChange={(e) => setNewForm({ ...newForm, author: e.target.value })} />
      <br/>
      <label htmlFor='categories'>Categories:</label>
      <input type='text' id='categories' name='categories' value={newForm.categories} 
      onChange={(e) => setNewForm({ ...newForm, categories: e.target.value })} />
      <br/>
      <label htmlFor='year'>Year:</label>
      <input type='text' id='year' name='year' value={newForm.year} 
      onChange={(e) => setNewForm({ ...newForm, year: e.target.value })} />
      <br/>
      <button type='submit'>Create Here</button>
    </form>
  );
}