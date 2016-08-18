"use strict";

//*------------------------------------------------------------------*

var React = require('react');
require("!style!css!./ebi-visual-species.css");
var mapping = require("./mapping.js");

//*------------------------------------------------------------------*

var Icon = React.createClass({

    propTypes: {
        species: React.PropTypes.string.isRequired,
        colourOverride: React.PropTypes.string,
        colourPerKingdom: React.PropTypes.objectOf(
        React.PropTypes.string
        ).isRequired
    },

    getDefaultProps: function(){
      return {
      	species: "oryctolagus cuniculus", //rabbit is objectively the best species
      	colourPerKingdom: {
      			animals:"red",
            plants: "green",
            other: "blue"
      		}
      };
    },

    _lookUpIcon: function(){
      for(var kingdom in mapping){
        if(mapping.hasOwnProperty(kingdom)){
          for(var iconSymbol in mapping[kingdom]){
            if (mapping[kingdom].hasOwnProperty(iconSymbol)){
              if(mapping[kingdom][iconSymbol].indexOf(this.props.species.toLowerCase())>-1){
                return [kingdom, iconSymbol];
              }
            }
          }
        }
      }
      return ["",""];
    },

    render: function () {
      var kingdomAndIcon = this._lookUpIcon();
        return (
            <span
            className={"icon icon-species"}
            data-icon={kingdomAndIcon[1]}
            style={{"color": this.props.colourOverride || this.props.colourPerKingdom[kingdomAndIcon[0]]}}
            title={this.props.species}/>
        );
    }

});

//*------------------------------------------------------------------*

module.exports = Icon;
