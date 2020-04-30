import { getMovieDetails } from '../src/utils/get-movie-details'


describe(`Test getMovieDetails()`, () => {

    const genres = [
        { 
            name: 'action', 
            movies: {
                results: [
                    {id: 1, name: 'movie1'}, 
                    {id: 2, name: 'movie2'}, 
                ]
            }
        },
        { 
            name: 'comedy', 
            movies: {
                results: [
                    {id: 3, name: 'movie3'}, 
                    {id: 4, name: 'movie4'}, 
                ]
            }
        }
    ]

    const searchResults = [{ id: 5}, { id: 6}]

    it(`returns '[element].movies.result[matching_id]' from genres if the passed id matches one of the ids in genres`, () => {
        const expectedResult = {id: 3, name: 'movie3'}
        expect(getMovieDetails(genres, searchResults, 3)).toEqual(expectedResult)
    })


    it(`returns '[element].movies.result[matching_id]' from searchResults if the passed id matches one of the ids in searchResults`, () => {
        const expectedResult = {id: 5}
        expect(getMovieDetails(genres, searchResults, 5)).toEqual(expectedResult)
    })

    it(`returns '{ error: 'No matching movie' }' if the id is not matched`, () => {
        const expectedResult = { error: 'No matching movie' }
        expect(getMovieDetails(genres, searchResults, 85)).toEqual(expectedResult)
    })

})
