import {useState, useEffect} from 'react';


export default function FetchCall() {
  const [jokes, setJokes] = useState([])

  useEffect(()=> {
    const url = "https://icanhazdadjoke.com/search?term=dad"

    fetch(url, {
      headers: { "Accept": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setJokes(data.results);
        // jokes.push(data);
        console.log(jokes);
        // console.log(jokes[0].results[0].joke)
      })
  }, [null])


  return (
    <div>
      <ul>
        {
          jokes.map((joke)=> (
           <li key={joke.id}>{joke.joke}</li>
          ))
        }
      </ul>
    </div>
  )
}