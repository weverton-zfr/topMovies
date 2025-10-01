import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [movies, setMovies] = useState([])
  const url = 'https://api.themoviedb.org/3/discover/movie'
  const key = '5bab60662c1c68f4433a9c985fc2300a'

  const getMovies = () => {
      axios({
      method: 'get',
      url: url,
      params: {
        api_key: key,
        language: 'pt-BR'
      }})
      .then((data) => setMovies(data.data.results))
      .catch((err) => console.error(err))
    }
console.log(movies)
  useEffect(() => {
    getMovies()
  },[])

  return (
    <h1>Ola Mundo!</h1>
  )
}

export default App
