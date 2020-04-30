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

const P = styled.p`
    font-size: 1.2rem;
`

const Button = styled.button`
    font-size: 2rem;
    font-weight: 800;
    width: 15rem;
    height: 3rem;
    margin-bottom: 2rem;
    background-color: RGB(100, 100, 150);
    border: none;
    border-radius: 40rem;
    cursor: pointer;
`

export const MovieDetail = ({ movie, showMovieDetail }) =>
    <MovieDetailWrapper>
        <H2>{movie.title}</H2>
        <Img src={`${posterBaseUrl}${movie.poster_path}`} alt={movie.title} />          
        <P>Year: {movie.release_date.slice(0, 4)}</P>
        <P>Vote: {movie.vote_average}</P>
        <P>{movie.overview}</P>
        <Button onClick={showMovieDetail}
            >Back
        </Button>
    </MovieDetailWrapper>
    