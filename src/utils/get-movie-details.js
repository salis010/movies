export const getMovieDetails = (genres, id) => {

    const noMovieFound = { error: 'No matching movie' }

    for( let i = 0; i < genres.length; i++) {
        for(let j = 0; j < genres[i].movies.results.length; j++) {
            if(genres[i].movies.results[j].id === id) {
                return genres[i].movies.results[j]
            }
        }
    }

    return noMovieFound
}
