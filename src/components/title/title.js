import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H1 } from '../common'


const TitleWrapper = styled.div`
    cursor: pointer
`

export const Title = ({ title, goHome }) => 
        <TitleWrapper onClick={goHome}>
            <H1>{title}</H1>
        </TitleWrapper>

Title.propTypes = {
    title: PropTypes.string.isRequired,
    goHome: PropTypes.func.isRequired,
}
