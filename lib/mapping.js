"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapping = {
  mammals: {
    "A": ["cat", "felis catus"],
    "a": ["alpaca", "vicugna pacos"],
    "C": ["cow", "bos taurus"],
    "d": ["dog", "canis lupus", "canis lupus familiaris"],
    "D": ["dolphin"],
    "e": ["elephant", "loxodonta africana", "loxodonta cyclotis", "elephas maximus"],
    "g": ["guinea pig", "cavia porcellus"],
    "G": ["gorilla", "gorilla gorilla"],
    "h": ["horse", "equus caballus"],
    "H": ["human", "homo sapiens"],
    "i": ["chimpanzee", "pan paniscus", "pan troglodytes"],
    "I": ["squirrel"],
    "l": ["armadillo"],
    "m": ["goat"],
    "M": ["mouse", "mus musculus"],
    "N": ["mouse lemur"],
    "o": ["hedgehog", "erinaceus europaeus"],
    "p": ["pig", "sus scrofa"],
    "Q": ["shrew"],
    "r": ["monkey", "macaca mulatta"],
    "R": ["rat", "rattus norvegicus"],
    "t": ["rabbit", "oryctolagus cuniculus"],
    "U": ["platypus", "ornithorhynchus anatinus"],
    "w": ["wallaby"],
    "x": ["sheep", "ovis aries"],
    "3": ["kangaroo rat"],
    "8": ["papio anubis"],
    "9": ["monodelphis domestica"],
    "!": ["ferret", "mustela putorius furo"],
    "(": ["bat"],
    "*": ["orangutan", "pongo abelii", "pongo pygmaeus"]
  },
  plants: {
    "B": ["arabidopsis thaliana", "arabidopsis lyrata", "brassica oleracea", "brassica rapa"],
    "c": ["corn", "zea mays"],
    "O": ["grapes", "vitis vinifera"],
    "P": ["plant", "physcomitrella patens", "sorghum bicolor", "triticum aestivum"],
    "5": ["barley", "hordeum vulgare", "hordeum vulgare subsp. vulgare"],
    "6": ["oryza sativa", "oryza sativa japonica group"],
    "%": ["brachypodium distachyon"],
    ")": ["tomatoes", "solanum lycopersicum", "solanum tuberosum"],
    "^": ["glycine max"]
  },
  other: {
    "b": ["bug"],
    "E": ["pufferfish", "tetraodon nigroviridis"],
    "f": ["frog", "xenopus (silurana) tropicalis", "xenopus tropicalis"],
    "F": ["fly", "drosophila melanogaster"],
    "k": ["chicken", "gallus gallus"],
    "L": ["escherichia coli"],
    "n": ["finch", "pyrrhula pyrrhula"],
    "s": ["scorpion"],
    "S": ["spider"],
    "u": ["fungus"],
    "v": ["virus"],
    "W": ["caenorhabditis elegans", "schistosoma mansoni"],
    "Y": ["yeast", "saccharomyces cerevisiae", "schizosaccharomyces pombe"],
    "Z": ["zebrafish", "danio rerio"],
    "0": ["amoeba"],
    "1": ["mosquito"],
    "2": ["diatom"],
    "4": ["louse"],
    "7": ["anolis carolinensis"],
    "£": ["aspergillus fumigatus"],
    "+": ["ray"],
    "'": ["snail"],
    "$": ["bee"],
    "&": ["tick"]
  }
};

var lookupInGroup = function lookupInGroup(group, species) {
  return Object.keys(mapping[group]).find(function (iconChar) {
    return mapping[group][iconChar].includes(species.toLowerCase());
  });
};

var lookupIcon = function lookupIcon(species) {
  for (var group in mapping) {
    var iconChar = lookupInGroup(group, species);
    if (iconChar) {
      return [group, iconChar];
    }
  }

  return ["", ""];
};

var getAllSpecies = function getAllSpecies() {
  var allSpecies = [];
  Object.keys(mapping).forEach(function (group) {
    Object.keys(mapping[group]).forEach(function (iconChar) {
      mapping[group][iconChar].forEach(function (species) {
        return allSpecies.push(species);
      });
    });
  });

  return allSpecies;
};

exports.default = lookupIcon;
exports.getAllSpecies = getAllSpecies;