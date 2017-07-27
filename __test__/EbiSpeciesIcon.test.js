import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

import lookupIcon, {getAllSpecies} from '../src/mapping.js'
import EbiSpeciesIcon from '../src/EbiSpeciesIcon.js'

const altGroupColours = {
  mammals: `brown`,
  plants: `orange`,
  other: `yellow`
}

getAllSpecies().forEach(species => {
  test(`Species icon of mapped species ${species}`, () => {
    const tree = renderer.create(<EbiSpeciesIcon species={species} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

test(`Species icon of unknown species`, () => {
  const tree = renderer.create(<EbiSpeciesIcon species={`foous baris`} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test(`Mammals are red, violets are blue`, () => {
  const mappedMammals = getAllSpecies().filter((species) => lookupIcon(species)[0] === `mammals`)

  mappedMammals.forEach((mammal) => {
    expect(shallow(<EbiSpeciesIcon species={mammal} />).prop(`style`)).toHaveProperty(`color`, `red`)
  })

  mappedMammals.forEach((mammal) => {
    expect(shallow(<EbiSpeciesIcon species={mammal} groupColours={altGroupColours} />).prop(`style`)).toHaveProperty(`color`, `brown`)
  })
})

test(`Plants are green`, () => {
  const mappedPlants = getAllSpecies().filter((species) => lookupIcon(species)[0] === `plants`)

  mappedPlants.forEach(plant => {
    expect(shallow(<EbiSpeciesIcon species={plant} />).prop(`style`)).toHaveProperty(`color`, `green`)
  })

  mappedPlants.forEach(plant => {
    expect(shallow(<EbiSpeciesIcon species={plant} groupColours={altGroupColours} />).prop(`style`)).toHaveProperty(`color`, `orange`)
  })
})

test(`Roses are red, others are blue`, () => {
  const mappedOthers = getAllSpecies().filter((species) => lookupIcon(species)[0] === `other`)

  mappedOthers.forEach(other => {
    expect(shallow(<EbiSpeciesIcon species={other} />).prop(`style`)).toHaveProperty(`color`, `blue`)
  })

  mappedOthers.forEach(other => {
    expect(shallow(<EbiSpeciesIcon species={other} groupColours={altGroupColours} />).prop(`style`)).toHaveProperty(`color`, `yellow`)
  })
})

test(`Override colour`, () => {
  expect(shallow(<EbiSpeciesIcon species={`homo sapiens`} colourOverride={`yellow`}/>).prop(`style`)).toHaveProperty(`color`, `yellow`)
  expect(shallow(<EbiSpeciesIcon species={`homo sapiens`} groupColours={altGroupColours} colourOverride={`yellow`}/>).prop(`style`)).toHaveProperty(`color`, `yellow`)
})
