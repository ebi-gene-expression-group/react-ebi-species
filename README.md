# EBI species icons for React

[![Build Status](https://travis-ci.org/ebi-gene-expression-group/react-ebi-species.svg?branch=master)](https://travis-ci.org/gxa/react-ebi-species) [![Coverage Status](https://coveralls.io/repos/github/ebi-gene-expression-group/react-ebi-species/badge.svg?branch=master)](https://coveralls.io/github/ebi-gene-expression-group/react-ebi-species?branch=master)

A React component to render organisms icons from the [EBI-Species font](https://www.ebi.ac.uk/style-lab/general/fonts/v1.3/#EBI-Species) declaratively.
[Demo of all supported species](https://ebi-gene-expression-group.github.io/react-ebi-species/html/).

## How to use
The component comes in two flavours:
* Using classes `.icon .icon-species` declared in [`fonts.css` from the EBI Visual Framework](https://www.ebi.ac.uk/style-lab/websites/)
* A bare-bones component that you can use in any web application without depending on the EBI VF styles being loaded in
your environment

The first one has the advantage that if the global CSS is changed, the component will then pick up the new styles. The second variant doesn’t need any dependency and can be used anywhere and it will just work. Notice that the second
version still uses classes, but they will be uniquely scoped to the component

## Instructions
To install:
```bash
npm install @ebi-gene-expression-group/react-ebi-species --save
```

To use as a React component:
```javascript
import EbiSpeciesIcon from '@ebi-gene-expression-group/react-ebi-species'
...
<EbiSpeciesIcon species={`homo sapiens`}/>
```

Alternatively, to use the “no class” flavour:
```javascript
import { EbiSpeciesIconBare as EbiSpeciesIcon } from '@ebi-gene-expression-group/react-ebi-species'
...
<EbiSpeciesIcon species={`homo sapiens`}/>
```

To use as a renderer and attach the icons to DOM elements:
```javascript
import { render } from '@ebi-gene-expression-group/react-ebi-species'
...
render({ species: 'homo sapiens' }, 'id-of-your-DOM-element')
```

Or:
```javascript
import { renderBare as render } from '@ebi-gene-expression-group/react-ebi-species'
...
render({ species: 'homo sapiens' }, 'id-of-your-DOM-element')
```

To use directly in your browser (see the source of the demo pages):
```html
<script src="dist/vendors.bundle.js"></script>
<script src="dist/ebiSpeciesIcon.bundle.js"></script>
<script src="dist/ebiSpeciesIconBare.bundle.js"></script>

<script>
    ebiSpeciesIcon.render({ species: 'homo sapiens' }, 'id-of-your-DOM-element')
    ebiSpeciesIcon.renderBare({ species: 'homo sapiens' }, 'id-of-your-DOM-element')
</script>

```

## Props
The `species` prop should be a [scientific name](http://www.ensembl.org/info/about/species.html), although the names
given in the EBI-Species documentation and other variants are available. It is case insensitive. Have a look at the
demo page for details.

|      Prop     |  Type  |       Default value         |                     Use case                     |
|---------------|--------|-----------------------------|--------------------------------------------------|
| `species`     | string | 🐰 oryctolagus cuniculus 🐰  | The name of the species to be rendered           |
| `groupColors` | object | ```{ warmBlooded: `indianred`, plants: `mediumseagreen`, other: `deepskyblue` }``` | Colours for groups of organisms |
| `color`       | string |                             | An optional colour that overrides `groupColours` |

# Contribute
Pull requests to enlarge the mapping of species to icons, or with alternative names of species, are very welcome!
Extend the mapping as required, then test locally through
```bash
npx webpack-dev-server -d
```

Go to `localhost:9000` and see that the new icon appears there.

It is also a good idea to verify that all tests pass:
```bash
npx jest
```

Commit and PR away.

It would be fairly easy to cut the React dependency out of this package if you just need the mapping - if you fork then
we can share the species to icon mapping.

# Credits
Made in the EBI for [Expression Atlas](https://www.ebi.ac.uk/gxa).
