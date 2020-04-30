import styled from 'styled-components'


export const GlobalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
`

export const H1 = styled.h1`
    font-size: 2.6rem;
    font-weight: 800;
    margin: 1rem 0;
    color: ${props => props.theme.colors.primary};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 3rem;
        margin: 2rem 0;
    }
`

export const H2 = styled.h2`
    font-size: 2rem;
    margin: 0 0 1rem 0;
    color: ${props => props.theme.colors.primary};
`
