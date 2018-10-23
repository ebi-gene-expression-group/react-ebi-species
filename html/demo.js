import React from 'react'
import ReactDOM from 'react-dom'

import { getAllSpecies } from '../src/mapping'

// Returns a function to render all species with the component passed in as argument
const _renderAll = (EbiSpeciesIcon) =>
  (target, groupColors) => {
    const allSpecies = getAllSpecies()

    const allIcons = allSpecies.map((species) =>
      <tr key={species}>
        <td>{species}</td>
        <td><EbiSpeciesIcon species={species} groupColors={groupColors}/></td>
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

export default _renderAll
