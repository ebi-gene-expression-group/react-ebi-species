const mapping = {
  "warmBlooded": {
    "a": [`alpaca`, `vicugna pacos`],
    "l": [`armadillo`],
    "(": [`bat`],
    "A": [`cat`, `felis catus`],
    "k": [`chicken`, `gallus gallus`],
    "i": [`chimpanzee`, `pan paniscus`, `pan troglodytes`],
    "C": [`cow`, `bos taurus`],
    "d": [`dog`, `canis lupus`, `canis lupus familiaris`],
    "D": [`dolphin`],
    "e": [`elephant`, `loxodonta africana`, `loxodonta cyclotis`, `elephas maximus`],
    "!": [`ferret`, `mustela putorius furo`],
    "n": [`finch`, `pyrrhula pyrrhula`],
    "m": [`goat`],
    "G": [`gorilla`, `gorilla gorilla`],
    "g": [`guinea pig`, `cavia porcellus`],
    "o": [`hedgehog`, `erinaceus europaeus`],
    "h": [`horse`, `equus caballus`],
    "H": [`human`, `homo sapiens`],
    "3": [`kangaroo rat`],
    "r": [`monkey`, `macaca mulatta`],
    "9": [`monodelphis`, `monodelphis domestica`],
    "M": [`mouse`, `mus musculus`],
    "N": [`mouse lemur`],
    "*": [`orangutan`, `pongo abelii`, `pongo pygmaeus`],
    "8": [`papio anubis`],
    "p": [`pig`, `sus scrofa`],
    "U": [`platypus`, `ornithorhynchus anatinus`],
    "t": [`rabbit`, `oryctolagus cuniculus`],
    "R": [`rat`, `rattus norvegicus`],
    "x": [`sheep`, `ovis aries`],
    "Q": [`shrew`],
    "I": [`squirrel`],
    "w": [`wallaby`]
  },
  "plants": {
    "5": [`barley`, `hordeum vulgare`, `hordeum vulgare subsp. vulgare`],
    "B": [`brassica`, `brassica oleracea`, `brassica rapa`, `arabidopsis`, `arabidopsis thaliana`, `arabidopsis lyrata`],
    "%": [`brachypodium`, `brachypodium distachyon`],
    "c": [`corn`, `zea mays`],
    "^": [`glycinemax`, `glycine max`],
    "O": [`grapes`, `vitis vinifera`],
    "P": [`plant`, `physcomitrella patens`, `sorghum bicolor`, `triticum aestivum`],
    "6": [`rice`, `oryza sativa`, `oryza sativa japonica group`],
    ")": [`tomatoes`, `solanum lycopersicum`, `solanum tuberosum`]
  },
  other: {
    "0": [`amoeba`],
    "7": [`anolis`, `anolis carolinensis`],
    "£": [`aspergillus`, `aspergillus fumigatus`],
    "$": [`bee`],
    "b": [`bug`],
    "W": [`c elegans`, `caenorhabditis elegans`, `schistosoma mansoni`],
    "2": [`diatom`],
    "L": [`ecoli`, `escherichia coli`],
    "F": [`fly`, `drosophila melanogaster`],
    "f": [`frog`, `xenopus (silurana) tropicalis`, `xenopus tropicalis`],
    "u": [`fungus`],
    "4": [`louse`],
    "1": [`mosquito`, `anopheles gambiae`],
    "@": [`plasmodium`, `plasmodium berghei`],
    "E": [`pufferfish`, `tetraodon nigroviridis`],
    "+": [`ray`],
    "s": [`scorpion`],
    "'": [`snail`],
    "S": [`spider`],
    "&": [`tick`],
    "v": [`virus`],
    "Y": [`yeast`, `saccharomyces cerevisiae`, `schizosaccharomyces pombe`],
    "Z": [`zebrafish`, `danio rerio`]
  }
}

const lookUpInGroup = (group, species) =>
  Object.keys(mapping[group]).find(iconChar => mapping[group][iconChar].includes(species.toLowerCase()))

const lookUpIcon = (species) => {
  for (const group in mapping) {
    const iconChar = lookUpInGroup(group, species)
    if (iconChar) {
      return [group, iconChar]
    }
  }

  return [``, ``]
}

const allSpecies = []
for (let group in mapping) {
  for (let iconChar in mapping[group]) {
    allSpecies.push(...mapping[group][iconChar])
  }
}

export { lookUpIcon, allSpecies }
