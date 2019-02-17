'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  renderNode: function renderNode(inProps, inEditor, inNext) {
    var children = inProps.children,
        isFocused = inProps.isFocused,
        isSelectecd = inProps.isSelectecd,
        attributes = _objectWithoutProperties(inProps, ['children', 'isFocused', 'isSelectecd']);

    var value = inProps.node.data.get('value');
    switch (inProps.node.type) {
      case 'image':
        return React.createElement(
          'figure',
          _extends({}, attributes, { className: 'slate-plugin-image-node' }),
          React.createElement('img', { src: value, width: '100%' }),
          React.createElement(
            'figurecaption',
            null,
            children
          )
        );
      default:
        return inNext();
    }
  }
};