import React from 'react'
import styled from 'styled-components'
import { SearchResult } from './search-result'


const P = styled.p`
    font-size: 1.4rem;
    font-weight: 800;
`

export const SearchResults = ({ movies }) => 
    <>
        {movies.length > 0 ?
            movies.map(movie => 
                    <SearchResult key={movie.id} movie={movie} />	
            )
            :
            <P>No movies matched your search</P>
        }
    </>

