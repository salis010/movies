import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { serverUrl } from '../../constants'
import magnifyingGlass from '../../images/magnifying-glass.png'
import close from '../../images/close.png'
import { goHome } from '../../store/actions'


const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 1.8rem;
  margin-bottom: 1rem;
  order: 0;

  @media only screen and (min-width: ${props => props.theme.breakpoint}) {
    order: 1;
    margin: 0;
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  border: 1px solid white;
  border-radius: 0.2rem;
`

const Input = styled.input`
  @keyframes expand {
    from {
      width: 0rem;
    }
  }
  width: 10rem;
  max-width: 60%;
  height: 2.6rem;
  font-size: 1.2rem;
  text-indent: 1rem;
  color: white;
  background-color: black;
  border: none;
  outline: none;
  animation: expand .2s ease-in-out;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
`

export const Search = ({ setSearching, setSearchResults, goHome }) => {

  const [isExpanded, setIsExpanded] = useState(false)
  const [searchText, setSearchText] = useState('')

  const onOpenSearchBox = () =>
    setIsExpanded(true)

  const onCloseSearchBox = () => {
    setIsExpanded(false)
    setSearchText('')
    goHome()
  }

  const handleOnChange = event =>
    setSearchText(event.target.value)

  const initiateSearch = () => {
    if(searchText.length > 0) {
      
      setSearching(true)

      fetch(`${serverUrl}/search/${searchText}`)
          .then(response => response.json())
          .then(data => setSearchResults(data.results))
          .catch(err => console.log(err))
    }
  }

  const handleKeyUp =event => {
    if (event.keyCode === 13) {
      initiateSearch()
    }
  }

  return (
      <Wrapper>
      {!isExpanded &&
        <ImageWrapper data-cy='search' onClick={onOpenSearchBox}>
          <img src={magnifyingGlass} alt='magnifying-glass' />
        </ImageWrapper>
      }
      {isExpanded &&
        <InputWrapper>
          <ImageWrapper onClick={onCloseSearchBox}>
            <img src={close} alt='close' />
          </ImageWrapper>
          <Input data-cy='search-input' value={searchText} onChange={handleOnChange} onKeyUp={handleKeyUp}/>
          <ImageWrapper data-cy='initiate-search' onClick={initiateSearch}>
            <img src={magnifyingGlass} alt='magnifying-glass' />
          </ImageWrapper>
        </InputWrapper>
      }
    </Wrapper>
  )
}

// Search.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// }