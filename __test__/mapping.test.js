import { lookUpIcon, allSpecies } from '../src/mapping'

test(`lookUpIcon returns correct icon character and group`, () => {
  expect(lookUpIcon(`homo sapiens`)).toEqual([`warmBlooded`, `H`])
})

test(`lookUpIcon is case insensitive`, () => {
  expect(lookUpIcon(`homo sapiens`)).toEqual(lookUpIcon(`HoMo SaPiEnS`))
})

test(`lookUpIcon returns empty strings for non-existing species`, () => {
  expect(lookUpIcon(`foo bar`)).toEqual([``, ``])
})

// This test requires manual maintenance when a new version of the EBI-Species font is released
test(`There are 65 mapped characters`, () => {
  const mappedChars = allSpecies
    .map(lookUpIcon)
    .map((groupAndChar) => groupAndChar[1])

  expect(new Set(mappedChars).size).toEqual(66)
})
