import React from 'react'
import ReactDOM from 'react-dom'

import { allSpecies } from '../src/mapping'

// Returns a function to render all species with the component passed in as argument
const _renderAll = (EbiSpeciesIcon) =>
  (target, groupColors) =>
    ReactDOM.render(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Icon</th>
            </tr>
          </thead>

          <tbody>{allSpecies.map((species) =>
            <tr key={species}>
              <td>{species}</td>
              <td><EbiSpeciesIcon species={species} groupColors={groupColors}/></td>
            </tr>
          )}
          </tbody>
        </table>
      </div>,
      document.getElementById(target)
    )

export default _renderAll
