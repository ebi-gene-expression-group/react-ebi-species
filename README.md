EBI species icons for React
======================

Icons from [EBI species](http://www.ebi.ac.uk/web_guidelines/fonts/EBI-Species/), mapped per species so one can select the correct icon programmatically.

[Demo of all supported species](https://wbazant.github.io/react-ebi-species/html/)

It is meant to work with lowercase scientific names as in [Ensembl reference](http://www.ensembl.org/info/about/species.html). For the species we include, see search box in [Expression Atlas](http://www.ebi.ac.uk/gxa)

Pull requests to enlarge the mapping of species to icons, or with alternative names of species, are very welcome!


To install:
`npm install --save react-ebi-species`

To build the files for standalone use:
`npm run [dev/dev-min/ci/prod]`

To use as a React component:
`var SpeciesIcon = require('react-ebi-species').Icon;`

To use as a renderer and attach the icons to DOM elements:
`var render = require('react-ebi-species').render;`

Made in the EBI for the [Expression Atlas](http://www.ebi.ac.uk/gxa)


Contribute
==========

Extend the mapping as required, then test locally through
```
webpack-dev-server --port 9000
```
Go to localhost:9000/html and see that the new icon appears there.
then do
```
webpack
```
Which will regenerate the /dist/ and the bundles. Commit and PR away.

It would be fairly easy to cut the React dependency out of this package if you just need the mapping - if you fork than we can share the species to icon mapping.
