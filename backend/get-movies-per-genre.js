const axios = require('axios')

const getMoviesPerGenre = genres => {

    genres.forEach(genre => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=e21522307a493e2a621bd5fd409fca23&with_genres=${genre.id}`)
            .then(response => genre.movies = response.data)
            .catch(err => console.log(genre.name, err))
    })

    return genres[0] // temprorary limit
}

module.exports = getMoviesPerGenre
