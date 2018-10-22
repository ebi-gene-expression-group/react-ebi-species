import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import lookupIcon from './mapping.js'

const SpeciesIcon = styled.span`
  text-decoration: none;
  font-style: normal

  ::before {
    font-family: 'EBI-Species';
    color: inherit;
    content: attr(data-icon);
  }
`

const EbiSpeciesIcon = (props) => {
  const groupAndIcon = lookupIcon(props.species)
  return (
    <SpeciesIcon
      data-icon={groupAndIcon[1]}
      style={{color: props.colourOverride || props.groupColours[groupAndIcon[0]]}}
      title={props.species}/>
  )
}

EbiSpeciesIcon.propTypes = {
  species: PropTypes.string.isRequired,
  colourOverride: PropTypes.string,
  groupColours: PropTypes.shape({
    mammals: PropTypes.string.isRequired,
    plants: PropTypes.string.isRequired,
    other: PropTypes.string.isRequired
  }).isRequired
}

EbiSpeciesIcon.defaultProps = {
  species: `oryctolagus cuniculus`, //rabbit is objectively the best species
  groupColours: {
    mammals: `red`,
    plants: `green`,
    other: `blue`
  }
}

export default EbiSpeciesIcon
