import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'


const Select = styled.select`
    font-size: 1rem;
    color: white;
    background-color: black;
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