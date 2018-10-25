import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { lookUpIcon, allSpecies } from '../src/mapping'
import EbiSpeciesIconBare from '../src/EbiSpeciesIconBare'

Enzyme.configure({ adapter: new Adapter() })

const altGroupColors = {
  mammals: `brown`,
  plants: `orange`,
  other: `yellow`
}

describe (`EbiSpeciesIconBare`, () => {
  allSpecies.forEach(species => {
    test(`Icon of mapped species ${species} matches snapshot`, () => {
      const tree = renderer.create(<EbiSpeciesIconBare species={species} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  test(`Icon of unknown species matches snapshot`, () => {
    const tree = renderer.create(<EbiSpeciesIconBare species={`crocubot`} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`doesn’t use EBI VF class names`, () => {
    expect(shallow(<EbiSpeciesIconBare species={`crocubot`} />).find(`.icon.icon-species`)).toHaveLength(0)
  })

  test(`Warm-blooded species are red, violets are blue`, () => {
    const mappedMammals = allSpecies.filter((species) => lookUpIcon(species)[0] === `mammals`)

    mappedMammals.forEach((warmBloodedAnimal) => {
      expect(shallow(<EbiSpeciesIconBare species={warmBloodedAnimal} />).prop(`style`).color).toMatch(`red`)
    })

    mappedMammals.forEach((warmBloodedAnimal) => {
      expect(shallow(<EbiSpeciesIconBare species={warmBloodedAnimal} groupColors={altGroupColors} />).prop(`style`)).toHaveProperty(`color`, `brown`)
    })
  })

  test(`Plants are green`, () => {
    const mappedPlants = allSpecies.filter((species) => lookUpIcon(species)[0] === `plants`)

    mappedPlants.forEach(plant => {
      expect(shallow(<EbiSpeciesIconBare species={plant} />).prop(`style`).color).toMatch(`green`)
    })

    mappedPlants.forEach(plant => {
      expect(shallow(<EbiSpeciesIconBare species={plant} groupColors={altGroupColors} />).prop(`style`)).toHaveProperty(`color`, `orange`)
    })
  })

  test(`Roses are red, others are blue`, () => {
    const mappedOthers = allSpecies.filter((species) => lookUpIcon(species)[0] === `other`)

    mappedOthers.forEach(other => {
      expect(shallow(<EbiSpeciesIconBare species={other} />).prop(`style`).color).toMatch(`blue`)
    })

    mappedOthers.forEach(other => {
      expect(shallow(<EbiSpeciesIconBare species={other} groupColors={altGroupColors} />).prop(`style`)).toHaveProperty(`color`, `yellow`)
    })
  })

  test(`admits a colour prop that overrides group colouring`, () => {
    expect(shallow(<EbiSpeciesIconBare species={`homo sapiens`} color={`yellow`}/>).prop(`style`)).toHaveProperty(`color`, `yellow`)
    expect(shallow(<EbiSpeciesIconBare species={`homo sapiens`} groupColors={altGroupColors} color={`yellow`}/>).prop(`style`)).toHaveProperty(`color`, `yellow`)
  })
})
