import React from 'react'
import ReactDOM from 'react-dom'

import EbiSpeciesIcon from './EbiSpeciesIcon'
import EbiSpeciesIconBare from './EbiSpeciesIconBare'

const render = function (options, target) {
  ReactDOM.render(<EbiSpeciesIcon {...options} />, document.getElementById(target))
}

const renderBare = function (options, target) {
  ReactDOM.render(<EbiSpeciesIconBare {...options} />, document.getElementById(target))
}

export { EbiSpeciesIcon as default, render, EbiSpeciesIconBare, renderBare }
