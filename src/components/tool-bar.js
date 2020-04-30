import React from 'react'
import styled from 'styled-components'
import { Filter } from './filter/index'
import { Search } from './search/index'


const ToolBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 1rem 0;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;        
        margin: 0 0 2rem 0;
    }
`

export const ToolBar = () => 
    <ToolBarWrapper>
        <Filter />
        <Search />
    </ToolBarWrapper>
