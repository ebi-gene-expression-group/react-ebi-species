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
        colourPerGroup: React.PropTypes.objectOf(
        React.PropTypes.string
        ).isRequired
    },

    getDefaultProps: function(){
      return {
      	species: "oryctolagus cuniculus", //rabbit is objectively the best species
      	colourPerGroup: {
      			mammals:"red",
            plants: "green",
            other: "blue"
      		}
      };
    },

    _lookUpIcon: function(){
      for(var group in mapping){
        if(mapping.hasOwnProperty(group)){
          for(var iconSymbol in mapping[group]){
            if (mapping[group].hasOwnProperty(iconSymbol)){
              if(mapping[group][iconSymbol].indexOf(this.props.species.toLowerCase())>-1){
                return [group, iconSymbol];
              }
            }
          }
        }
      }
      return ["",""];
    },

    render: function () {
      var groupAndIcon = this._lookUpIcon();
        return (
            <span
            className={"react-ebi-species icon icon-species"}
            data-icon={groupAndIcon[1]}
            style={{"color": this.props.colourOverride || this.props.colourPerGroup[groupAndIcon[0]]}}
            title={this.props.species}/>
        );
    }

});

//*------------------------------------------------------------------*

module.exports = Icon;
