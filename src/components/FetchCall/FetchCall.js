import { useState, useEffect } from 'react';
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


  return (
    <div>
      <form >
        <label>
          Search Dad Jokes:
          <input type="text" value={searchTerm} required
            onChange={handleChange} />
        </label>
      </form>
      <div>
        {
          jokes.map((joke) => (
            <div>

              <p className="joke" key={joke.id}>{joke.joke}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}