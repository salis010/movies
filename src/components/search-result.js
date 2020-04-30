import React from 'react'
import styled from 'styled-components'
import { posterBaseUrl } from '../constants'


const MovieWrapper = styled.div`
    display: flex;    
    margin-bottom: 1rem;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const Img = styled.img`
    width: 100px;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        width: 185px;
    }
`

const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
    margin: 0 0 1rem 0;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 1.6rem;
    }
`

export const SearchResult = ({ movie }) => {
    
    if(movie.poster_path != null) {
        return (
            <MovieWrapper>
                <Img src={`${posterBaseUrl}${movie.poster_path}`} alt={movie.title} />
                <InfoWrapper>
                    <Title>{movie.title}</Title>
                    <p>Year:{movie.release_date.slice(0, 4)}</p>
                </InfoWrapper>
            </MovieWrapper>
        )
    } else {
        return null
    }
}
