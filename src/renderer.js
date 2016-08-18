"use strict";

//*------------------------------------------------------------------*

var React = require('react');
var ReactDOM = require('react-dom');

//*------------------------------------------------------------------*

var Icon = require('./SpeciesIcon.jsx');

//*------------------------------------------------------------------*

module.exports = function(mountNode,species,colourOverride, colourPerKingdom) {
    ReactDOM.render(
        React.createElement(Icon,{
          species: species,
          colourOverride: colourOverride,
          colourPerKingdom: colourPerKingdom
        }), mountNode
    );
};
