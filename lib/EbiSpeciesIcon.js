'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./ebi-visual-species.css');

var _mapping = require('./mapping.js');

var _mapping2 = _interopRequireDefault(_mapping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EbiSpeciesIcon = function EbiSpeciesIcon(props) {
  var groupAndIcon = (0, _mapping2.default)(props.species);
  return _react2.default.createElement('span', {
    className: 'react-ebi-species-icon',
    'data-icon': groupAndIcon[1],
    style: { color: props.colourOverride || props.colourPerGroup[groupAndIcon[0]] },
    title: props.species });
};

EbiSpeciesIcon.propTypes = {
  species: _propTypes2.default.string.isRequired,
  colourOverride: _propTypes2.default.string,
  colourPerGroup: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired
};

EbiSpeciesIcon.defaultProps = {
  species: 'oryctolagus cuniculus', //rabbit is objectively the best species
  colourPerGroup: {
    mammals: 'red',
    plants: 'green',
    other: 'blue'
  }
};

exports.default = EbiSpeciesIcon;