import { filterGenres } from '../src/utils/filter-genres'


describe(`Test filterGenres()`, () => {

    const genres = [
        { 
            name: 'action', 
            movies: {
                results: ['movie1', 'movie2']
            }
        },
        { 
            name: 'comedy', 
            movies: {
                results: ['movie3', 'movie4']
            }
        }
    ]

    it(`returns '[element].movies.result' if the name of one of the elements matched the filter`, () => {
        const expectedResult = ['movie3', 'movie4']
        expect(filterGenres(genres, 'comedy')).toEqual(expectedResult)
    })

    it(`returns an empty array if there is no match with the filter`, () => {
        expect(filterGenres(genres, 'maltese-horror-films')).toEqual([])
    })

})
