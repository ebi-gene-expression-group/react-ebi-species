import { shallow, mount } from 'enzyme'

import { lookUpIcon, allSpecies } from '../src/mapping'
import EbiSpeciesIcon from '../src/EbiSpeciesIcon'

const altGroupColors = {
  mammals: `brown`,
  plants: `orange`,
  other: `yellow`
}

describe(`EbiSpeciesIcon with classes`, () => {
  allSpecies.forEach(species => {
    test(`Icon of mapped species ${species} matches snapshot`, () => {
      expect(mount(<EbiSpeciesIcon species={species} />)).toMatchSnapshot()
    })
  })

  test(`Icon of unknown species matches snapshot`, () => {
    expect(mount(<EbiSpeciesIcon species={`crocubot`} />)).toMatchSnapshot()
  })

  test(`uses EBI VF class names`, () => {
    expect(shallow(<EbiSpeciesIcon species={`crocubot`} />)).toContainExactlyOneMatchingElement(`.icon.icon-species`)
  })

  test(`Warm-blooded species are red, violets are blue`, () => {
    const mappedMammals = allSpecies.filter((species) => lookUpIcon(species)[0] === `mammals`)

    mappedMammals.forEach((warmBloodedAnimal) => {
      expect(shallow(<EbiSpeciesIcon species={warmBloodedAnimal} />)).toHaveStyle(`color`, `red`)
    })

    mappedMammals.forEach((warmBloodedAnimal) => {
      expect(shallow(<EbiSpeciesIcon species={warmBloodedAnimal} groupColors={altGroupColors} />)).toHaveStyle(`color`, `brown`)
    })
  })

  test(`Plants are green`, () => {
    const mappedPlants = allSpecies.filter((species) => lookUpIcon(species)[0] === `plants`)

    mappedPlants.forEach(plant => {
      // We’re happy if the colour is green-like
      expect(shallow(<EbiSpeciesIcon species={plant} />).prop(`style`).color).toMatch(`green`)
    })

    mappedPlants.forEach(plant => {
      expect(shallow(<EbiSpeciesIcon species={plant} groupColors={altGroupColors} />)).toHaveStyle(`color`, `orange`)
    })
  })

  test(`Roses are red, others are blue`, () => {
    const mappedOthers = allSpecies.filter((species) => lookUpIcon(species)[0] === `other`)

    mappedOthers.forEach(other => {
      // We’re happy if the colour is blue-like
      expect(shallow(<EbiSpeciesIcon species={other} />).prop(`style`).color).toMatch(`blue`)
    })

    mappedOthers.forEach(other => {
      expect(shallow(<EbiSpeciesIcon species={other} groupColors={altGroupColors} />)).toHaveStyle(`color`, `yellow`)
    })
  })

  test(`admits a colour prop that overrides group colouring`, () => {
    expect(shallow(<EbiSpeciesIcon species={`homo sapiens`} color={`yellow`}/>)).toHaveStyle(`color`, `yellow`)
    expect(shallow(<EbiSpeciesIcon species={`homo sapiens`} groupColors={altGroupColors} color={`yellow`}/>)).toHaveStyle(`color`, `yellow`)
  })

})
