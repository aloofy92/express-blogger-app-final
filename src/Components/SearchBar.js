import { useState } from "react";

import { Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = (props) => {

  const [search, setSearch] = useState("");

  const { blogInfo } = props;

  const [content, setContent] = useState(blogInfo);

  const handleChange = (event) => {

    const value = event.target.value.toLowerCase();

    setSearch(value);

    setContent(

      blogInfo.filter(

        (blogInfo) =>

          blogInfo.title.toLowerCase().includes(value) 
  
      )

    );

  };

  return (

    <div>

      <input

        type="search"

        placeholder="Search Here"

        value={search}

        onChange={handleChange}
      />

      <button>Search</button>

      <div className="card-section">

        {content.map((blogInfo, index) => (

          <Card style={{ width: "40rem" }} key={index} >

            <Card.Body>

              <Card.Title style={{color: "grey" }}><b>Title:</b> {blogInfo.title}</Card.Title>

              <Card.Text style={{color: "blue"}}><b>Text:</b> {blogInfo.text}</Card.Text>

              <Card.Footer>

                <label className="categories"><b>Categories:</b> {blogInfo.categories}</label>

              </Card.Footer>

            </Card.Body>

            <Card.Footer>

              <label className="author"><b>Author:</b> {blogInfo.author}</label>

            </Card.Footer>

          </Card>

        ))}

      </div>

    </div>

  );

};

export default SearchBar;