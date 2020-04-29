import React from 'react'
import styled from 'styled-components'
import { posterBaseUrl } from '../../constants'
import { H2 } from '../common'

const MovieDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    width: 185px;
`

const Button = styled.button`
    font-size: 2rem;
    font-weight: 800;
    width: 15rem;
    height: 3rem;
    background-color: RGB(100, 100, 150);
    border: none;
    border-radius: 40rem;
    cursor: pointer;
`

export const MovieDetail = ({ movie, showMovieDetail }) =>
    <MovieDetailWrapper>
        <H2>{movie.title}</H2>
        <Img src={`${posterBaseUrl}${movie.poster_path}`} alt={movie.title} />          
        <p>Year:{movie.release_date.slice(0, 4)}</p>
        <p>Vote:{movie.vote_average}</p>
        <p>{movie.overview}</p>
        <Button onClick={showMovieDetail}
            >Back
        </Button>
    </MovieDetailWrapper>
    