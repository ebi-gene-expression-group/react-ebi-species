import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import lookUpIcon from './mapping'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'EBI-Species';
    src:url('https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.eot');
    src:url('https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.eot?#iefix') format('embedded-opentype'),
      url('https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.woff2') format('woff2'),
      url('https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.woff') format('woff'),
      url('https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.svg#EBI-Species') format('svg'),
      url('https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/EBI-Species/fonts/EBI-Species.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`

const StyledEbiIcon = styled.span`
  text-decoration: none;
  font-style: normal;
  text-rendering: optimizeLegibility !important;
  background-size: contain;
  font-weight: 400;
`

const StyledEbiIconSpecies = styled(StyledEbiIcon)`
  ::before {
    color: ${(props) => props.color}
    font-family: 'EBI-Species';
    content: attr(data-icon);
    text-transform: none;
  }
`

const EbiSpeciesIconBare = ({species, groupColors, color}) => {
  const [group, icon] = lookUpIcon(species)
  return (
    <StyledEbiIconSpecies
      color={color || groupColors[group] || `black`}
      data-icon={icon}
      title={capitalizeFirstLetter(species)}/>
  )
}

EbiSpeciesIconBare.propTypes = {
  species: PropTypes.string.isRequired,
  groupColors: PropTypes.shape({
    warmBlooded: PropTypes.string.isRequired,
    plants: PropTypes.string.isRequired,
    other: PropTypes.string.isRequired
  }),
  color: PropTypes.string
}

EbiSpeciesIconBare.defaultProps = {
  species: `oryctolagus cuniculus`, //rabbit is objectively the best species
  groupColors: {
    warmBlooded: `indianred`,
    plants: `mediumseagreen`,
    other: `deepskyblue`
  }
}

export default EbiSpeciesIconBare
