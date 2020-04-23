import React from 'react'
import styled from 'styled-components'
import { H2 } from '../common'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Genre = ({ title }) => 
    <Wrapper>
        <H2>{title}</H2>
    </Wrapper>
    