# EBI species icons for React

[![Build Status](https://travis-ci.org/gxa/react-ebi-species.svg?branch=master)](https://travis-ci.org/gxa/react-ebi-species) [![Coverage Status](https://coveralls.io/repos/github/gxa/react-ebi-species/badge.svg?branch=master)](https://coveralls.io/github/gxa/react-ebi-species?branch=master) [![Dependency Status](https://gemnasium.com/badges/github.com/gxa/react-ebi-species.svg)](https://gemnasium.com/github.com/gxa/react-ebi-species)

Icons from [EBI species](http://www.ebi.ac.uk/web_guidelines/EBI-Icon-fonts/v1.2/), mapped per species so one can select the correct icon programmatically.

[Demo of all supported species](https://wbazant.github.io/react-ebi-species/html/).

It is meant to work with lowercase scientific names as in [Ensembl reference](http://www.ensembl.org/info/about/species.html). For some of (but not all) available, see search box in [Expression Atlas](http://www.ebi.ac.uk/gxa).

Pull requests to enlarge the mapping of species to icons, or with alternative names of species, are very welcome!


To install:
`npm install --save react-ebi-species`

To use as a React component:
```
import EbiSpeciesIcon from 'react-ebi-species'
...
<EbiSpeciesIcon species="homo sapiens"/>
```

To use as a renderer and attach the icons to DOM elements:
```
import {render} from 'react-ebi-species'
...
render({species: 'homo sapiens'}, 'id-of-your-DOM-element')
```

To use directly in your browser (see `html/index.hml`):
```
<script src="dist/vendorCommons.bundle.js"></script>
<script src="dist/ebiSpeciesIcon.bundle.js"></script>

<script>
    ebiSpeciesIcon.render({species: 'homo sapiens'}, 'id-of-your-DOM-element')
</script>

```

Made in the EBI for the [Expression Atlas](http://www.ebi.ac.uk/gxa).


# Contribute

Extend the mapping as required, then test locally through
```
webpack-dev-server -d
```
Go to localhost:9000/html and see that the new icon appears there.

It is also a good idea to verify that all tests pass
```
npm run coverage
```
Commit and PR away.

It would be fairly easy to cut the React dependency out of this package if you just need the mapping - if you fork then we can share the species to icon mapping.
