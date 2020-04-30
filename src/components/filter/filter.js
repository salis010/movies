import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Select = styled.select`
    font-size: 1rem;
    height: 1.8rem;
    color: white;
    background-color: black;
    border: 1px solid white;
    border-radius: 0.2rem;
    order: 1;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        order: 0;
        margin: 0;
      }
`

export const Filter = ({ options, setFilter }) => {
    
    const handleChange = event => setFilter(event.target.value)
    
    return (
        <Select defaultValue={''} onChange={handleChange}>
            <option value='all'>All genres</option>
            {options.map(option => 
                <option key={option} value={option}>{option}</option>
            )}
        </Select>
    )
}

Filter.propTypes = {
    options: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired,
}
