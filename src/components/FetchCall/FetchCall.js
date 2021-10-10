import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import DadSearch from '../DadSearch/DadSearch.js';
import "./style.css";


export default function FetchCall() {

  const [searchTerm, setSearchTerm] = useState('');
  const [jokes, setJokes] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    //console.log(searchTerm);
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    //console.log(searchTerm)
    const url = `https://icanhazdadjoke.com/search?term=${searchTerm}`
    //console.log(url)

    fetch(url, {
      headers: { "Accept": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setJokes(data.results);
        //console.log(jokes);
      })
  }, [searchTerm])

  let allJokes = jokes.map((joke) => (
    <div>
      <ul>
      <li className="joke" key={joke.id}>{joke.joke}</li>
      </ul>
    </div>
  ))

  return (
    <div>
      <DadSearch handle={handleChange}/>
      <div>
        <Container>
          {allJokes}
        </Container>
      </div>
    </div>
  )
}