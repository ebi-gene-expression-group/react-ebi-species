"use strict";

//*------------------------------------------------------------------*

var React = require('react');

var ReactDOM = require('react-dom');

//*------------------------------------------------------------------*

var Icon = require('../src/SpeciesIcon.jsx');
var mapping = require("../src/mapping.js");
require("../src/ebi-visual-species.css");

//*------------------------------------------------------------------*

exports.render = function(mountNode) {
  var allSpecies = [];
  for(var kingdom in mapping){
    if(mapping.hasOwnProperty(kingdom)){
      for(var iconSymbol in mapping[kingdom]){
        if (mapping[kingdom].hasOwnProperty(iconSymbol)){
          var o = mapping[kingdom][iconSymbol];
          if(typeof o === 'string'){
            allSpecies.push(o);
          } else {
            [].push.apply(allSpecies, o);
          }
        }
      }
    }
  }

  ReactDOM.render(
      React.createElement('div',{
      },
      allSpecies.map(function(species){
        return (
          React.createElement('div'),
          {key:species+" parent"},
          [
            React.createElement('div',{style:{marginTop:'20px'}},species),
            React.createElement(Icon, {species:species})
          ]
        )
      })
    ), mountNode
  )
};
