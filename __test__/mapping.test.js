import lookupIcon, {getAllSpecies} from '../src/mapping.js'

test(`lookupIcon returns correct icon character and group`, () => {
  expect(lookupIcon(`homo sapiens`)).toEqual([`mammals`, `H`])
})

test(`lookupIcon is case insensitive`, () => {
  expect(lookupIcon(`homo sapiens`)).toEqual(lookupIcon(`HoMo SaPiEnS`))
})

test(`lookupIcon returns empty strings for non-existing species`, () => {
  expect(lookupIcon(`foo bar`)).toEqual([``, ``])
})

test(`There are 65 mapped characters`, () => {
  const mappedChars = getAllSpecies()
    .map(lookupIcon)
    .map((groupAndChar) => groupAndChar[1])

  expect(new Set(mappedChars).size).toEqual(65)
})
