export const filterGenres = (genres, filter) => {

    for(let i = 0; i < genres.length; i++) {
     
        if(genres[i].name == filter) {
            return JSON.parse(JSON.stringify(genres[i])).movies.results
        }
    }

    return []
}
