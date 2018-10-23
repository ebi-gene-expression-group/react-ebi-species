import React from 'react'
import PropTypes from 'prop-types'

import lookUpIcon from './mapping'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const EbiSpeciesIcon = ({species, groupColors, color}) => {
  const [group, icon] = lookUpIcon(species)
  return (
    icon ?
      <span
        className={`icon icon-species`}
        style={{color: color || groupColors[group] || `black`}}
        data-icon={icon}
        title={capitalizeFirstLetter(species)}/> :
      <span tile={capitalizeFirstLetter(species)}>❔</span>
  )
}

EbiSpeciesIcon.propTypes = {
  species: PropTypes.string.isRequired,
  groupColors: PropTypes.shape({
    warmBlooded: PropTypes.string.isRequired,
    plants: PropTypes.string.isRequired,
    other: PropTypes.string.isRequired
  }),
  color: PropTypes.string
}

EbiSpeciesIcon.defaultProps = {
  species: `oryctolagus cuniculus`, //rabbit is objectively the best species
  groupColors: {
    warmBlooded: `indianred`,
    plants: `mediumseagreen`,
    other: `deepskyblue`
  }
}

export default EbiSpeciesIcon
