EBI species icons for React
======================

Icons from [EBI species](http://www.ebi.ac.uk/web_guidelines/fonts/EBI-Species/), mapped per species so one can select the correct icon programmatically.

It is meant to work with lowercase scientific names as in [Ensembl reference](http://www.ensembl.org/info/about/species.html). For the species we include, see search box in [Expression Atlas](www.ebi.ac.uk/gxa)

Pull requests to enlarge the mapping of species to icons, or with alternative names of species, are very welcome!


To install:
`npm install --save react-ebi-species`

To build the files for standalone use:
`npm run [dev/dev-min/ci/prod]`

To use as a React component:
`var SpeciesIcon = require('react-ebi-species').Icon;`

To use as a renderer and attach the icons to DOM elements:
`var render = require('react-ebi-species').render;`

Made in the EBI for the [Expression Atlas](www.ebi.ac.uk/gxa)
