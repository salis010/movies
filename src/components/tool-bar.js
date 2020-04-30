import React from 'react'
import styled from 'styled-components'
import { Filter } from './filter/index'
import { Search } from './search/index'


const ToolBarWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const ToolBar = () => 
    <ToolBarWrapper>
        <Filter />
        <Search />
    </ToolBarWrapper>
