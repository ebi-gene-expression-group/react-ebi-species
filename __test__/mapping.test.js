import lookupIcon, { allSpecies } from '../src/mapping.js'

test(`lookupIcon returns correct icon character and group`, () => {
  expect(lookupIcon(`homo sapiens`)).toEqual([`warmBlooded`, `H`])
})

test(`lookupIcon is case insensitive`, () => {
  expect(lookupIcon(`homo sapiens`)).toEqual(lookupIcon(`HoMo SaPiEnS`))
})

test(`lookupIcon returns empty strings for non-existing species`, () => {
  expect(lookupIcon(`foo bar`)).toEqual([``, ``])
})

// This test requires manual maintenance when a new version of the EBI-Species font is released
test(`There are 65 mapped characters`, () => {
  const mappedChars = allSpecies
    .map(lookupIcon)
    .map((groupAndChar) => groupAndChar[1])

  expect(new Set(mappedChars).size).toEqual(65)
})
