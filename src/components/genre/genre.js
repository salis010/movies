import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { H2 } from '../common'
import Slider from 'react-slick'
import { posterBaseUrl, breakpoint } from '../../constants'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-bottom: 2rem;
    overflow: hidden;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        height: 335px;
    }
`

const ImageWrapper = styled.div`
    cursor: pointer;
`

const Img = styled.img`
    width: ${props => props.width};
    margin-right: 100px;
`

export const Genre = ({ title, movies, setCurrentMovie }) => {

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)
    const [ imageWidth, setImageWidth ] = useState(screenWidth < breakpoint ? 100 : 185)

    const updateScreenWidth = () => {
        const width = window.innerWidth
        
        setScreenWidth(width - 40)
        setImageWidth(width < breakpoint ? 100 : 185)
    }

    useEffect(() => {
        window.addEventListener("resize", updateScreenWidth)
        
        return () => window.removeEventListener("resize", updateScreenWidth)
    })

    const n = Math.floor(screenWidth / imageWidth)

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: n,
        slidesToScroll: n,
        dots: false,
    }

    const handleClick = event => setCurrentMovie(parseInt(event.target.getAttribute('id')))

    return (
        <Wrapper>
            <H2>{title}</H2>
            <Slider {...sliderSettings}>
                {movies.results.map(movie =>
                <ImageWrapper key={movie.id} >
                    <Img 
                        onClick={handleClick}
                        id={movie.id}
                        width={imageWidth}
                        src={`${posterBaseUrl}${movie.poster_path}`} 
                        alt={movie.title}
                    />
                </ImageWrapper>
                )}
            </Slider>
        </Wrapper>
    )
}
    