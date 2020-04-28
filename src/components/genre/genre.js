import React from 'react'
import styled from 'styled-components'
import { H2 } from '../common'
import { posterBaseUrl } from '../../constants'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
alert(posterBaseUrl)
export const Genre = ({ title, movies }) => 
    <Wrapper>
        <H2>{title}</H2>
        <ul>
            {movies.results.map(movie =>
                // <li style={{color: 'RGB(200, 200, 200)'}} key={movie.id}>{movie.original_title}</li>
                <img key={movie.id} src={`${posterBaseUrl}${movie.poster_path}`} />
            )}
        </ul>
    </Wrapper>
    