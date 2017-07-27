import React from 'react'
import ReactDOM from 'react-dom'

import EbiSpeciesIcon from './EbiSpeciesIcon.js'

const render = function (options, target) {
  ReactDOM.render(<EbiSpeciesIcon {...options} />, document.getElementById(target))
}

export {EbiSpeciesIcon as default, render}
