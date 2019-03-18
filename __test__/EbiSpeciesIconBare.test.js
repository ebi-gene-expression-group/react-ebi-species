import { shallow, mount } from 'enzyme'

import { lookUpIcon, allSpecies } from '../src/mapping'
import EbiSpeciesIconBare from '../src/EbiSpeciesIconBare'

const altGroupColors = {
  mammals: `brown`,
  plants: `orange`,
  other: `yellow`
}

describe (`EbiSpeciesIconBare`, () => {
  allSpecies.forEach(species => {
    test(`Icon of mapped species ${species} matches snapshot`, () => {
      expect(mount(<EbiSpeciesIconBare species={species} />)).toMatchSnapshot()
    })
  })

  test(`Icon of unknown species matches snapshot`, () => {
    expect(mount(<EbiSpeciesIconBare species={`crocubot`} />)).toMatchSnapshot()
  })

  test(`doesn’t use EBI VF class names`, () => {
    expect(shallow(<EbiSpeciesIconBare species={`crocubot`} />)).not.toContainMatchingElement(`.icon.icon-species`)
  })

  test(`Warm-blooded species are red, violets are blue`, () => {
    const mappedMammals = allSpecies.filter((species) => lookUpIcon(species)[0] === `mammals`)

    mappedMammals.forEach((warmBloodedAnimal) => {
      expect(shallow(<EbiSpeciesIconBare species={warmBloodedAnimal} />)).toHaveStyle(`color`, `red`)
    })

    mappedMammals.forEach((warmBloodedAnimal) => {
      expect(shallow(<EbiSpeciesIconBare species={warmBloodedAnimal} groupColors={altGroupColors} />)).toHaveStyle(`color`, `brown`)
    })
  })

  test(`Plants are green`, () => {
    const mappedPlants = allSpecies.filter((species) => lookUpIcon(species)[0] === `plants`)

    mappedPlants.forEach(plant => {
      // We’re happy if the colour is green-like
      expect(shallow(<EbiSpeciesIconBare species={plant} />).prop(`style`).color).toMatch(`green`)
    })

    mappedPlants.forEach(plant => {
      expect(shallow(<EbiSpeciesIconBare species={plant} groupColors={altGroupColors} />)).toHaveStyle(`color`, `orange`)
    })
  })

  test(`Roses are red, others are blue`, () => {
    const mappedOthers = allSpecies.filter((species) => lookUpIcon(species)[0] === `other`)

    mappedOthers.forEach(other => {
      // We’re happy if the colour is blue-like
      expect(shallow(<EbiSpeciesIconBare species={other} />).prop(`style`).color).toMatch(`blue`)
    })

    mappedOthers.forEach(other => {
      expect(shallow(<EbiSpeciesIconBare species={other} groupColors={altGroupColors} />)).toHaveStyle(`color`, `yellow`)
    })
  })

  test(`admits a colour prop that overrides group colouring`, () => {
    expect(shallow(<EbiSpeciesIconBare species={`homo sapiens`} color={`yellow`}/>)).toHaveStyle(`color`, `yellow`)
    expect(shallow(<EbiSpeciesIconBare species={`homo sapiens`} groupColors={altGroupColors} color={`yellow`}/>)).toHaveStyle(`color`, `yellow`)
  })
})
