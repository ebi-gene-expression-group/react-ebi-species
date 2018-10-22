import React from 'react'
import ReactDOM from 'react-dom'

import { EbiSpeciesIconBare, renderBare } from '../src/index'
import { getAllSpecies } from '../src/mapping'

const renderAll = (target) => {
  const allSpecies = getAllSpecies()

  const allIcons = allSpecies.map((species) =>
    <tr key={species}>
      <td>{species}</td>
      <td><EbiSpeciesIconBare species={species}/></td>
    </tr>
  )

  ReactDOM.render(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Icon</th>
          </tr>
        </thead>

        <tbody>
          {allIcons}
        </tbody>
      </table>
    </div>,
    document.getElementById(target)
  )
}

export {renderAll, renderBare as render}
