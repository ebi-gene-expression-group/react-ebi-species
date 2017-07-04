import React from 'react'
import ReactDOM from 'react-dom'

import EbiSpeciesIcon, {render} from '../src/index.js'
import {getAllSpecies} from '../src/mapping.js'

const renderAll = (target) => {
  const allSpecies = getAllSpecies()

  const allIcons = allSpecies.map((species) =>
    <tr key={species}>
      <td>{species}</td>
      <td><EbiSpeciesIcon species={species}/></td>
    </tr>)

  ReactDOM.render(
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Icon</th>
        </thead>
        <tbody>
          {allIcons}
        </tbody>
      </table>
    </div>,
    document.getElementById(target)
  )
}

export {renderAll, render}
