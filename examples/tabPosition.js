webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34);


/***/ },

/***/ 13:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(13);
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTabs = __webpack_require__(16);
	
	var _rcTabs2 = _interopRequireDefault(_rcTabs);
	
	var PanelContent = (function (_React$Component) {
	  _inherits(PanelContent, _React$Component);
	
	  function PanelContent(props) {
	    _classCallCheck(this, PanelContent);
	
	    _get(Object.getPrototypeOf(PanelContent.prototype), 'constructor', this).call(this, props);
	    console.log(this.props.id, 'constructor');
	  }
	
	  _createClass(PanelContent, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      console.log(this.props.id, 'componentWillReceiveProps');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var count = [1, 1, 1, 1]; // new Array(4) skip forEach ....
	      var els = count.map(function (c, i) {
	        return _react2['default'].createElement(
	          'p',
	          { key: i },
	          new Array(60).join(_this.props.id)
	        );
	      });
	      return _react2['default'].createElement(
	        'div',
	        null,
	        els
	      );
	    }
	  }]);
	
	  return PanelContent;
	})(_react2['default'].Component);
	
	var Component = _react2['default'].createClass({
	  displayName: 'Component',
	
	  getInitialState: function getInitialState() {
	    return {
	      tabPosition: 'top',
	      start: 0
	    };
	  },
	
	  onChange: function onChange(key) {
	    console.log('onChange ' + key);
	  },
	
	  onTabClick: function onTabClick(key) {
	    console.log('onTabClick ' + key);
	  },
	
	  tick: function tick() {
	    this.setState({
	      start: this.state.start + 10
	    });
	  },
	
	  changeTabPosition: function changeTabPosition(e) {
	    this.setState({
	      tabPosition: e.target.value
	    });
	  },
	
	  render: function render() {
	    var start = this.state.start;
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: 20 } },
	      _react2['default'].createElement(
	        'h1',
	        null,
	        'tabPosition'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'tabPosition:',
	        _react2['default'].createElement(
	          'select',
	          { value: this.state.tabPosition, onChange: this.changeTabPosition },
	          _react2['default'].createElement(
	            'option',
	            { value: "top" },
	            'top'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: "bottom" },
	            'bottom'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: "left" },
	            'left'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: "right" },
	            'right'
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTabs2['default'],
	        { defaultActiveKey: '2',
	          tabPosition: this.state.tabPosition,
	          onTabClick: this.onTabClick,
	          onChange: this.onChange },
	        _react2['default'].createElement(
	          _rcTabs.TabPane,
	          { tab: 'tab ' + start, key: "1" },
	          _react2['default'].createElement(PanelContent, { id: start })
	        ),
	        _react2['default'].createElement(
	          _rcTabs.TabPane,
	          { tab: 'tab ' + (start + 1), key: "2" },
	          _react2['default'].createElement(PanelContent, { id: start + 1 })
	        ),
	        _react2['default'].createElement(
	          _rcTabs.TabPane,
	          { tab: 'tab ' + (start + 2), key: "3", disabled: true },
	          _react2['default'].createElement(PanelContent, { id: start + 2 })
	        ),
	        _react2['default'].createElement(
	          _rcTabs.TabPane,
	          { tab: 'tab ' + (start + 3), key: "4" },
	          _react2['default'].createElement(PanelContent, { id: start + 3 })
	        )
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.tick },
	        'rerender'
	      )
	    );
	  }
	});
	
	_react2['default'].render(_react2['default'].createElement(Component, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=tabPosition.js.map