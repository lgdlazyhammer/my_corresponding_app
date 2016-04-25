var LBSUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.actions = exports.configureStore = undefined;

	__webpack_require__(1);

	var _treeViewContainer = __webpack_require__(5);

	var _treeViewContainer2 = _interopRequireDefault(_treeViewContainer);

	var _store = __webpack_require__(18);

	var _store2 = _interopRequireDefault(_store);

	var _actions = __webpack_require__(8);

	var _actions2 = _interopRequireDefault(_actions);

	var _utils = __webpack_require__(23);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.configureStore = _store2.default;
	exports.actions = _actions2.default;
	exports.utils = _utils2.default;
	exports.default = _treeViewContainer2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tree-view.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tree-view.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".lbs-tree-container > .editable-label.text {\n  font-weight: bold; }\n\n.lbs-tree {\n  list-style: none;\n  margin-bottom: 10px;\n  margin-left: 0;\n  margin-top: 10px;\n  padding-left: 0; }\n  .lbs-tree .lbs-tree-node-children {\n    list-style: none;\n    margin-left: 20px;\n    padding-left: 0; }\n\n.lbs-tree-edit-toolbar-button {\n  min-width: 58px; }\n\n.lbs-context-menu-layer {\n  margin-bottom: 10px;\n  margin-left: 40px;\n  margin-top: -10px; }\n\n.lbs-context-menu-overlay {\n  background-color: transparent;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n.lbs-context-menu-item {\n  z-index: 101; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mapDispatchToProps = exports.mapStateToProps = undefined;

	var _reactRedux = __webpack_require__(6);

	var _redux = __webpack_require__(7);

	var _actions = __webpack_require__(8);

	var _treeView = __webpack_require__(11);

	var _treeView2 = _interopRequireDefault(_treeView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, _props) {
	  return {
	    tree: state.tree,
	    editable: state.editable,
	    selectable: state.selectable,
	    i18n: state.i18n,
	    toolbar: state.toolbar,
	    contextMenuItems: state.contextMenuItems
	  };
	};

	var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    treeActions: (0, _redux.bindActionCreators)(_actions.TreeActions, dispatch),
	    nodeActions: (0, _redux.bindActionCreators)(_actions.NodeActions, dispatch)
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_treeView2.default);

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NodeActions = exports.TreeActions = undefined;

	var _treeActions = __webpack_require__(9);

	var TreeActions = _interopRequireWildcard(_treeActions);

	var _nodeActions = __webpack_require__(10);

	var NodeActions = _interopRequireWildcard(_nodeActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.TreeActions = TreeActions;
	exports.NodeActions = NodeActions;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.treeEditableChange = treeEditableChange;
	exports.treeSelectableChange = treeSelectableChange;
	exports.treeNameUpdate = treeNameUpdate;
	/*
	 * action types
	 */

	var TREE_EDITABLE_CHANGE = exports.TREE_EDITABLE_CHANGE = 'TREE_EDITABLE_CHANGE';
	var TREE_SELECTABLE_CHANGE = exports.TREE_SELECTABLE_CHANGE = 'TREE_SELECTABLE_CHANGE';
	var TREE_NAME_UPDATE = exports.TREE_NAME_UPDATE = 'TREE_NAME_UPDATE';

	/*
	 * action creators
	 */

	/*
	 * Set tree as editable or readonly.
	 */
	function treeEditableChange(editable) {
	  return {
	    type: TREE_EDITABLE_CHANGE,
	    payload: {
	      editable: editable
	    }
	  };
	}

	/*
	 * Allow/disallow select tree node
	 */
	function treeSelectableChange(selectable) {
	  return {
	    type: TREE_SELECTABLE_CHANGE,
	    payload: {
	      selectable: selectable
	    }
	  };
	}

	/*
	 * Update tree name
	 */
	function treeNameUpdate(name) {
	  return {
	    type: TREE_NAME_UPDATE,
	    payload: {
	      name: name
	    }
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selectNode = selectNode;
	exports.addNode = addNode;
	exports.addLevelNode = addLevelNode;
	exports.addAreaNode = addAreaNode;
	exports.addLocationOptionNode = addLocationOptionNode;
	exports.removeNode = removeNode;
	exports.moveNodeUp = moveNodeUp;
	exports.moveNodeDown = moveNodeDown;
	exports.promoteNode = promoteNode;
	exports.demoteNode = demoteNode;
	exports.updateNodeName = updateNodeName;
	exports.openContextMenu = openContextMenu;
	exports.closeContextMenu = closeContextMenu;
	/*
	 * action types
	 */

	var SELECT_NODE = exports.SELECT_NODE = 'SELECT_NODE';
	var ADD_NODE = exports.ADD_NODE = 'ADD_NODE';
	var REMOVE_NODE = exports.REMOVE_NODE = 'REMOVE_NODE';
	var MOVE_NODE_UP = exports.MOVE_NODE_UP = 'MOVE_NODE_UP';
	var MOVE_NODE_DOWN = exports.MOVE_NODE_DOWN = 'MOVE_NODE_DOWN';
	var PROMOTE_NODE = exports.PROMOTE_NODE = 'PROMOT_NODE';
	var DEMOTE_NODE = exports.DEMOTE_NODE = 'DEMOTE_NODE';
	var UPDATE_NODE_NAME = exports.UPDATE_NODE_NAME = 'UPDATE_NODE_NAME';
	var OPEN_CONTEXT_MENU = exports.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU';
	var CLOSE_CONTEXT_MENU = exports.CLOSE_CONTEXT_MENU = 'CLOSE_CONTEXT_MENU';

	/*
	 * action creators
	 */

	/*
	 * Set a node as selected.
	 */
	function selectNode(nodeId) {
	  return {
	    type: SELECT_NODE,
	    payload: {
	      nodeId: nodeId
	    }
	  };
	}

	/*
	 * Add a child node, by appending at bottom, or by inserting at top.
	 */
	function addNode(parentNodeId, options) {
	  var append = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	  return {
	    type: ADD_NODE,
	    payload: {
	      parentNodeId: parentNodeId,
	      options: options,
	      append: append ? true : false
	    }
	  };
	}

	/*
	 * Add a level node.
	 */
	function addLevelNode(parentNodeId) {
	  var append = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	  return addNode(parentNodeId, { type: 'Level' }, append);
	}

	/*
	 * Add an area node.
	 */
	function addAreaNode(parentNodeId) {
	  var append = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	  return addNode(parentNodeId, { type: 'Area' }, append);
	}

	/*
	 * Add a location option node.
	 */
	function addLocationOptionNode(parentNodeId) {
	  var append = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	  return addNode(parentNodeId, { type: 'LocationOption' }, append);
	}

	/*
	 * Remove node.
	 */
	function removeNode(nodeId) {
	  return {
	    type: REMOVE_NODE,
	    payload: {
	      nodeId: nodeId
	    }
	  };
	}

	/*
	 * Move node up by placing it before it's previous sibling.
	 */
	function moveNodeUp(nodeId) {
	  return {
	    type: MOVE_NODE_UP,
	    payload: {
	      nodeId: nodeId
	    }
	  };
	}

	/*
	 * Move node down by placing it below it's next sibling.
	 */
	function moveNodeDown(nodeId) {
	  return {
	    type: MOVE_NODE_DOWN,
	    payload: {
	      nodeId: nodeId
	    }
	  };
	}

	/*
	 * Promote a node as a sibling of it's parent.
	 */
	function promoteNode(parentNodeId, nodeId) {
	  return {
	    type: PROMOTE_NODE,
	    payload: {
	      parentNodeId: parentNodeId,
	      nodeId: nodeId
	    }
	  };
	}

	/*
	 * Demote a node as a child of it's previous sibling.
	 */
	function demoteNode(parentNodeId, nodeId) {
	  return {
	    type: DEMOTE_NODE,
	    payload: {
	      parentNodeId: parentNodeId,
	      nodeId: nodeId
	    }
	  };
	}

	/*
	 * Update node name.
	 */
	function updateNodeName(nodeId, name) {
	  return {
	    type: UPDATE_NODE_NAME,
	    payload: {
	      nodeId: nodeId,
	      name: name
	    }
	  };
	}

	/*
	* Open context menu on node.
	*/
	function openContextMenu(nodeId) {
	  return {
	    type: OPEN_CONTEXT_MENU,
	    payload: {
	      nodeId: nodeId
	    }
	  };
	}

	/*
	* Close context menu on node.
	*/
	function closeContextMenu(nodeId) {
	  return {
	    type: CLOSE_CONTEXT_MENU,
	    payload: {
	      nodeId: nodeId
	    }
	  };
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _editableLabel = __webpack_require__(13);

	var _editableLabel2 = _interopRequireDefault(_editableLabel);

	var _treeEditToolbar = __webpack_require__(14);

	var _treeEditToolbar2 = _interopRequireDefault(_treeEditToolbar);

	var _treeNodeView = __webpack_require__(15);

	var _treeNodeView2 = _interopRequireDefault(_treeNodeView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TreeView = function (_React$Component) {
	  _inherits(TreeView, _React$Component);

	  _createClass(TreeView, null, [{
	    key: 'propTypes',
	    get: function get() {
	      return {
	        tree: _react.PropTypes.object.isRequired,
	        editable: _react.PropTypes.bool,
	        selectable: _react.PropTypes.bool,
	        i18n: _react.PropTypes.object,
	        treeActions: _react.PropTypes.object,
	        nodeActions: _react.PropTypes.object,
	        contextMenuItems: _react.PropTypes.array
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        editable: false,
	        selectable: false,
	        i18n: {
	          toolbar: {
	            add_node: 'Add',
	            remove_node: 'Remove',
	            demote: 'Demote',
	            promote: 'Promote',
	            move_up: 'Up',
	            move_down: 'Down'
	          },
	          tree: {
	            name_label: 'Tree: ',
	            name_input_placeholder: 'Type tree name here'
	          },
	          node: {
	            name_input_placeholder: 'Type node name here'
	          }
	        }
	      };
	    }
	  }]);

	  function TreeView(props) {
	    _classCallCheck(this, TreeView);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeView).call(this, props));
	  }

	  _createClass(TreeView, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var handleTextChange = function handleTextChange(text) {
	        _this2.props.treeActions.treeNameUpdate(text);
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'lbs-tree-container' },
	        _react2.default.createElement(
	          'label',
	          { className: 'lbs-tree-name-label' },
	          this.props.i18n.tree.name_label
	        ),
	        _react2.default.createElement(_editableLabel2.default, {
	          text: this.props.tree.name,
	          editable: this.props.editable,
	          required: true,
	          placeholder: this.props.i18n.tree.name_input_placeholder,
	          textChange: handleTextChange
	        }),
	        this.props.editable && _react2.default.createElement(_treeEditToolbar2.default, _extends({
	          i18n: this.props.i18n.toolbar
	        }, this.props.toolbar, {
	          actions: this.props.nodeActions
	        })),
	        _react2.default.createElement(
	          'ul',
	          { className: 'lbs-tree' },
	          _react2.default.createElement(_treeNodeView2.default, {
	            node: this.props.tree.root,
	            editable: this.props.editable,
	            selectable: this.props.selectable,
	            i18n: this.props.i18n.node,
	            key: this.props.tree.root.id,
	            actions: this.props.nodeActions,
	            contextMenuItems: this.props.contextMenuItems })
	        )
	      );
	    }
	  }]);

	  return TreeView;
	}(_react2.default.Component);

	exports.default = TreeView;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditableLabel = function (_React$Component) {
	  _inherits(EditableLabel, _React$Component);

	  _createClass(EditableLabel, null, [{
	    key: 'propTypes',
	    get: function get() {
	      return {
	        editable: _react.PropTypes.bool,
	        required: _react.PropTypes.bool,
	        text: _react.PropTypes.string.isRequired,
	        placeholder: _react.PropTypes.string,
	        textChange: _react.PropTypes.func,
	        keydown: _react.PropTypes.func
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        editable: false,
	        required: false,
	        text: ''
	      };
	    }
	  }]);

	  function EditableLabel(props) {
	    _classCallCheck(this, EditableLabel);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditableLabel).call(this, props));

	    _this._state = {
	      editing: _this.props.editable && !_this.valid(_this.props),
	      focus: false
	    };
	    return _this;
	  }

	  _createClass(EditableLabel, [{
	    key: 'valid',
	    value: function valid(props) {
	      if (props.required) {
	        return !/^\s*$/i.test(props.text);
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.editable && !this.valid(nextProps)) {
	        this.setState({
	          editing: true
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.state.editing) {
	        var handleTextClick = this.props.editable ? function (e) {
	          _this2.setState({
	            editing: true,
	            focus: true
	          });
	          e.preventDefault();
	        } : null;
	        return _react2.default.createElement(
	          'span',
	          {
	            className: 'editable-label text',
	            onClick: handleTextClick },
	          this.props.text
	        );
	      } else {
	        var handleValueChange = function handleValueChange(e) {
	          _this2.props.textChange(e.target.value);
	        };

	        var handleInputBlur = function handleInputBlur(_e) {
	          if (_this2.state.editing && _this2.valid(_this2.props)) {
	            _this2.setState({
	              editing: false,
	              focus: false
	            });
	          }
	        };

	        return _react2.default.createElement('input', {
	          className: 'editable-label text-input',
	          type: 'text',
	          ref: function ref(c) {
	            return _this2.state.focus && c && c.focus();
	          },
	          value: this.props.text,
	          placeholder: this.props.placeholder,
	          onChange: handleValueChange,
	          onBlur: handleInputBlur,
	          onKeyDown: this.props.keydown });
	      }
	    }
	  }, {
	    key: 'state',
	    get: function get() {
	      return this._state;
	    },
	    set: function set(value) {
	      this._state = value;
	    }
	  }]);

	  return EditableLabel;
	}(_react2.default.Component);

	exports.default = EditableLabel;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TreeEditToolbar = function (_React$Component) {
	  _inherits(TreeEditToolbar, _React$Component);

	  _createClass(TreeEditToolbar, null, [{
	    key: "propTypes",
	    get: function get() {
	      return {
	        i18n: _react.PropTypes.object.isRequired,
	        nodeId: _react.PropTypes.any,
	        parentNodeId: _react.PropTypes.any,
	        add: _react.PropTypes.bool.isRequired,
	        remove: _react.PropTypes.bool.isRequired,
	        demote: _react.PropTypes.bool.isRequired,
	        promote: _react.PropTypes.bool.isRequired,
	        moveup: _react.PropTypes.bool.isRequired,
	        movedown: _react.PropTypes.bool.isRequired,
	        actions: _react.PropTypes.object.isRequired
	      };
	    }
	  }]);

	  function TreeEditToolbar(props) {
	    _classCallCheck(this, TreeEditToolbar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeEditToolbar).call(this, props));
	  }

	  _createClass(TreeEditToolbar, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var add = _props.add;
	      var remove = _props.remove;
	      var demote = _props.demote;
	      var promote = _props.promote;
	      var moveup = _props.moveup;
	      var movedown = _props.movedown;
	      var actions = _props.actions;
	      var nodeId = _props.nodeId;
	      var parentNodeId = _props.parentNodeId;
	      var addNode = actions.addNode;
	      var removeNode = actions.removeNode;
	      var demoteNode = actions.demoteNode;
	      var promoteNode = actions.promoteNode;
	      var moveNodeUp = actions.moveNodeUp;
	      var moveNodeDown = actions.moveNodeDown;


	      return _react2.default.createElement(
	        "div",
	        { className: "lbs-tree-edit-toolbar btn-toolbar" },
	        _react2.default.createElement(
	          "div",
	          { className: "lbs-tree-edit-toolbar-button-group btn-group btn-group-xs" },
	          _react2.default.createElement(
	            "button",
	            { onClick: function onClick() {
	                return addNode(nodeId);
	              }, disabled: !add, className: "lbs-tree-edit-toolbar-button add-node btn btn-primary" },
	            this.props.i18n.add_node
	          ),
	          _react2.default.createElement(
	            "button",
	            { onClick: function onClick() {
	                return removeNode(nodeId);
	              }, disabled: !remove, className: "lbs-tree-edit-toolbar-button remove-node btn btn-danger" },
	            this.props.i18n.remove_node
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "lbs-tree-edit-toolbar-button-group btn-group btn-group-xs" },
	          _react2.default.createElement(
	            "button",
	            { onClick: function onClick() {
	                return demoteNode(parentNodeId, nodeId);
	              }, disabled: !demote, className: "lbs-tree-edit-toolbar-button demote-node btn btn-primary" },
	            this.props.i18n.demote
	          ),
	          _react2.default.createElement(
	            "button",
	            { onClick: function onClick() {
	                return promoteNode(parentNodeId, nodeId);
	              }, disabled: !promote, className: "lbs-tree-edit-toolbar-button promote-node btn btn-primary" },
	            this.props.i18n.promote
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "lbs-tree-edit-toolbar-button-group btn-group btn-group-xs" },
	          _react2.default.createElement(
	            "button",
	            { onClick: function onClick() {
	                return moveNodeUp(nodeId);
	              }, disabled: !moveup, className: "lbs-tree-edit-toolbar-button move-node-up btn btn-primary" },
	            this.props.i18n.move_up
	          ),
	          _react2.default.createElement(
	            "button",
	            { onClick: function onClick() {
	                return moveNodeDown(nodeId);
	              }, disabled: !movedown, className: "lbs-tree-edit-toolbar-button move-node-down btn btn-primary" },
	            this.props.i18n.move_down
	          )
	        )
	      );
	    }
	  }]);

	  return TreeEditToolbar;
	}(_react2.default.Component);

	exports.default = TreeEditToolbar;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _editableLabel = __webpack_require__(13);

	var _editableLabel2 = _interopRequireDefault(_editableLabel);

	var _contextMenu = __webpack_require__(16);

	var _contextMenu2 = _interopRequireDefault(_contextMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TreeNodeView = function (_React$Component) {
	  _inherits(TreeNodeView, _React$Component);

	  _createClass(TreeNodeView, null, [{
	    key: 'propTypes',
	    get: function get() {
	      return {
	        node: _react.PropTypes.object.isRequired,
	        parentNode: _react.PropTypes.object,
	        editable: _react.PropTypes.bool,
	        selectable: _react.PropTypes.bool,
	        i18n: _react.PropTypes.object.isRequired,
	        actions: _react.PropTypes.object,
	        contextMenuItems: _react.PropTypes.array
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        selectable: false,
	        editable: false,
	        parentNode: null
	      };
	    }
	  }]);

	  function TreeNodeView(props) {
	    _classCallCheck(this, TreeNodeView);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeNodeView).call(this, props));
	  }

	  _createClass(TreeNodeView, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var selectControl = null;

	      if (this.props.selectable) {
	        var handleChange = function handleChange(event) {
	          if (event.target.checked) {
	            _this2.props.actions.selectNode(_this2.props.node.id);
	          }
	        };

	        selectControl = _react2.default.createElement('input', { type: 'checkbox', onChange: handleChange, checked: this.props.node.selected });
	      }

	      var handleKeyDown = this.props.editable ? function (event) {
	        if (event.keyCode == 9) {
	          // tab
	          event.preventDefault();
	          var node = _this2.props.node;
	          var parentNode = _this2.props.parentNode;

	          if (!event.shiftKey) {
	            if (!node.isOrphan && !node.isFirst) {
	              _this2.props.actions.demoteNode(parentNode.id, node.id);
	            }
	          } else {
	            // shift + tab
	            if (!node.isRoot && !parentNode.isRoot) {
	              _this2.props.actions.promoteNode(parentNode.id, node.id);
	            }
	          }
	        }
	      } : null;

	      var handleTextChange = function handleTextChange(text) {
	        var node = _this2.props.node;
	        _this2.props.actions.updateNodeName(node.id, text);
	      };

	      var handleContextMenuOpen = function handleContextMenuOpen(e) {
	        if (_this2.props.editable) {
	          e.preventDefault();
	          var node = _this2.props.node;
	          _this2.props.actions.openContextMenu(node.id);
	        }
	      };

	      var handleContextMenuClose = function handleContextMenuClose() {
	        var node = _this2.props.node;
	        _this2.props.actions.closeContextMenu(node.id);
	      };

	      var handleContextMenuItemClick = function handleContextMenuItemClick(item) {
	        var node = _this2.props.node;
	        _this2.props.actions[item.command](node.id);
	        _this2.props.actions.closeContextMenu(node.id);
	      };

	      return _react2.default.createElement(
	        'li',
	        { className: 'lbs-tree-node' + (this.props.node.isLeaf ? ' leaf' : '') + (this.props.node.selected ? ' selected' : '') },
	        _react2.default.createElement(
	          'span',
	          { onContextMenu: handleContextMenuOpen },
	          selectControl,
	          _react2.default.createElement(_editableLabel2.default, {
	            text: this.props.node.name,
	            editable: this.props.editable,
	            required: true,
	            placeholder: this.props.i18n.name_input_placeholder,
	            textChange: handleTextChange,
	            keydown: handleKeyDown,
	            key: this.props.node.id
	          })
	        ),
	        this.props.node.contextMenuVisible && _react2.default.createElement(_contextMenu2.default, {
	          items: this.props.contextMenuItems,
	          onMenuClose: handleContextMenuClose,
	          onItemClick: handleContextMenuItemClick
	        }),
	        !this.props.node.isLeaf && _react2.default.createElement(
	          'ul',
	          { className: 'lbs-tree-node-children' },
	          this.props.node.nodes.map(function (childNode) {
	            return _react2.default.createElement(TreeNodeView, _extends({}, _this2.props, {
	              node: childNode,
	              parentNode: _this2.props.node,
	              key: childNode.id
	            }));
	          })
	        )
	      );
	    }
	  }]);

	  return TreeNodeView;
	}(_react2.default.Component);

	exports.default = TreeNodeView;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _contextMenuItem = __webpack_require__(17);

	var _contextMenuItem2 = _interopRequireDefault(_contextMenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContextMenu = function (_React$Component) {
	  _inherits(ContextMenu, _React$Component);

	  _createClass(ContextMenu, null, [{
	    key: 'propTypes',
	    get: function get() {
	      return {
	        items: _react.PropTypes.array.isRequired,
	        onMenuClose: _react.PropTypes.func,
	        onItemClick: _react.PropTypes.func
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {};
	    }
	  }]);

	  function ContextMenu(props) {
	    _classCallCheck(this, ContextMenu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContextMenu).call(this, props));
	  }

	  _createClass(ContextMenu, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var handleOverlayClick = function handleOverlayClick() {
	        _this2.props.onMenuClose();
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'lbs-context-menu-layer dropdown open' },
	        _react2.default.createElement('div', { className: 'lbs-context-menu-overlay', onClick: handleOverlayClick }),
	        _react2.default.createElement(
	          'ul',
	          { className: 'lbs-context-menu dropdown-menu' },
	          this.props.items.map(function (item, index) {
	            return _react2.default.createElement(_contextMenuItem2.default, { item: item, key: index, onItemClick: _this2.props.onItemClick });
	          })
	        )
	      );
	    }
	  }]);

	  return ContextMenu;
	}(_react2.default.Component);

	exports.default = ContextMenu;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContextMenuItem = function (_React$Component) {
	  _inherits(ContextMenuItem, _React$Component);

	  _createClass(ContextMenuItem, null, [{
	    key: "propTypes",
	    get: function get() {
	      return {
	        item: _react.PropTypes.object.isRequired,
	        onItemClick: _react.PropTypes.func
	      };
	    }
	  }, {
	    key: "defaultProps",
	    get: function get() {
	      return {};
	    }
	  }]);

	  function ContextMenuItem(props) {
	    _classCallCheck(this, ContextMenuItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContextMenuItem).call(this, props));
	  }

	  _createClass(ContextMenuItem, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var handleClick = function handleClick(e) {
	        e.preventDefault();
	        _this2.props.onItemClick(_this2.props.item);
	      };

	      return this.props.item.separator ? _react2.default.createElement("li", { role: "separator", className: "lbs-context-menu-item-divider divider" }) : _react2.default.createElement(
	        "li",
	        { className: 'lbs-context-menu-item' + (this.props.item.disabled ? ' disabled' : '')
	        },
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: handleClick },
	          this.props.item.text
	        )
	      );
	    }
	  }]);

	  return ContextMenuItem;
	}(_react2.default.Component);

	exports.default = ContextMenuItem;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(7);

	var _reducers = __webpack_require__(19);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(initialState) {
	  return (0, _redux.createStore)(_reducers2.default, initialState);
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _treeReducer = __webpack_require__(20);

	var _treeReducer2 = _interopRequireDefault(_treeReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _treeReducer2.default;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = treeReducer;

	var _actions = __webpack_require__(8);

	var _nodeReducer = __webpack_require__(21);

	var _nodeReducer2 = _interopRequireDefault(_nodeReducer);

	var _toolbarReducer = __webpack_require__(22);

	var _toolbarReducer2 = _interopRequireDefault(_toolbarReducer);

	var _contextMenuReducer = __webpack_require__(25);

	var _contextMenuReducer2 = _interopRequireDefault(_contextMenuReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  editable: false,
	  selectable: true,
	  tree: {}
	};

	function treeReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  var next = Object.assign({}, state);

	  switch (action && action.type) {
	    case _actions.TreeActions.TREE_EDITABLE_CHANGE:
	      next.editable = action.payload.editable;
	      break;
	    case _actions.TreeActions.TREE_SELECTABLE_CHANGE:
	      next.selectable = action.payload.selectable;
	      break;
	    case _actions.TreeActions.TREE_NAME_UPDATE:
	      next.tree.name = action.payload.name;
	      break;
	    default:
	      break;
	  }

	  next.tree = next.tree || {};
	  next.tree.root = (0, _nodeReducer2.default)(next.tree.root, action);
	  next = (0, _toolbarReducer2.default)(next, action);
	  next = (0, _contextMenuReducer2.default)(next, action);
	  return next;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.default = nodeReducer;

	var _actions = __webpack_require__(8);

	var initialState = {
	  id: 0,
	  name: 'Project',
	  nodes: [],
	  selected: true,
	  isRoot: true,
	  isLeaf: true,
	  isFirst: true,
	  isLast: true
	};

	var nextId = function () {
	  var id = 0;
	  return function () {
	    ++id;
	    return id;
	  };
	}();

	function rootAnnotationReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var _action = arguments[1];

	  var next = Object.assign({}, state);
	  next.isRoot = true;
	  next.isChildOfRoot = false;
	  next.isFirst = true;
	  next.isLast = true;
	  next.isOrphan = true;
	  return next;
	}

	function nodeActionReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  var next = Object.assign({}, state);
	  next.nodes = next.nodes || [];

	  switch (action && action.type) {
	    case _actions.NodeActions.SELECT_NODE:
	      {
	        if (next.id === action.payload.nodeId) {
	          next.selected = true;
	        } else {
	          next.selected = false;
	        }
	        break;
	      }

	    case _actions.NodeActions.ADD_NODE:
	      {
	        if (next.id === action.payload.parentNodeId) {
	          var newNode = Object.assign({
	            id: 'new_' + nextId(),
	            name: '',
	            nodes: []
	          }, action.payload.options);

	          if (action.payload.append) {
	            next.nodes.push(newNode);
	          } else {
	            next.nodes.splice(0, 0, newNode);
	          }
	          return next;
	        }
	        break;
	      }

	    case _actions.NodeActions.REMOVE_NODE:
	      {
	        var childIndex = next.nodes.findIndex(function (c) {
	          return c.id === action.payload.nodeId;
	        });
	        if (childIndex !== -1) {
	          var _next$nodes$splice = next.nodes.splice(childIndex, 1);

	          var _next$nodes$splice2 = _slicedToArray(_next$nodes$splice, 1);

	          var c = _next$nodes$splice2[0];

	          if (c.selected) {
	            // if the removed child was selected previously, make the parent be selected automatically.
	            next.selected = true;
	          }
	          return next;
	        }
	        break;
	      }

	    case _actions.NodeActions.DEMOTE_NODE:
	      {
	        if (next.id === action.payload.parentNodeId) {
	          var _childIndex = next.nodes.findIndex(function (c) {
	            return c.id === action.payload.nodeId;
	          });
	          if (_childIndex > 0) {
	            var _next$nodes$splice3 = next.nodes.splice(_childIndex, 1);

	            var _next$nodes$splice4 = _slicedToArray(_next$nodes$splice3, 1);

	            var _c = _next$nodes$splice4[0];

	            var previous = next.nodes[_childIndex - 1];
	            previous.nodes = previous.nodes || [];
	            previous.nodes.push(_c);
	          }
	          return next;
	        }
	        break;
	      }

	    case _actions.NodeActions.PROMOTE_NODE:
	      {
	        var parentIndex = next.nodes.findIndex(function (c) {
	          return c.id === action.payload.parentNodeId;
	        });
	        if (parentIndex !== -1) {
	          var parent = next.nodes[parentIndex];
	          var _childIndex2 = parent.nodes.findIndex(function (c) {
	            return c.id === action.payload.nodeId;
	          });
	          if (_childIndex2 !== -1) {
	            var _parent$nodes$splice = parent.nodes.splice(_childIndex2, 1);

	            var _parent$nodes$splice2 = _slicedToArray(_parent$nodes$splice, 1);

	            var _c2 = _parent$nodes$splice2[0];

	            next.nodes.splice(parentIndex + 1, 0, _c2);
	          }
	          return next;
	        }
	        break;
	      }

	    case _actions.NodeActions.MOVE_NODE_UP:
	      {
	        var _childIndex3 = next.nodes.findIndex(function (c) {
	          return c.id === action.payload.nodeId;
	        });
	        if (_childIndex3 > 0) {
	          var _next$nodes$splice5 = next.nodes.splice(_childIndex3, 1);

	          var _next$nodes$splice6 = _slicedToArray(_next$nodes$splice5, 1);

	          var _c3 = _next$nodes$splice6[0];

	          next.nodes.splice(_childIndex3 - 1, 0, _c3);
	          return next;
	        }
	        break;
	      }

	    case _actions.NodeActions.MOVE_NODE_DOWN:
	      {
	        var _childIndex4 = next.nodes.findIndex(function (c) {
	          return c.id === action.payload.nodeId;
	        });
	        if (_childIndex4 > -1 && _childIndex4 < next.nodes.length - 1) {
	          var _next$nodes$splice7 = next.nodes.splice(_childIndex4, 1);

	          var _next$nodes$splice8 = _slicedToArray(_next$nodes$splice7, 1);

	          var _c4 = _next$nodes$splice8[0];

	          next.nodes.splice(_childIndex4 + 1, 0, _c4);
	          return next;
	        }
	        break;
	      }

	    case _actions.NodeActions.UPDATE_NODE_NAME:
	      {
	        if (next.id === action.payload.nodeId) {
	          next.name = action.payload.name;
	          return next;
	        }
	        break;
	      }

	    case _actions.NodeActions.OPEN_CONTEXT_MENU:
	      {
	        if (next.id === action.payload.nodeId) {
	          next.contextMenuVisible = true;
	        } else {
	          next.contextMenuVisible = false;
	        }
	        break;
	      }

	    case _actions.NodeActions.CLOSE_CONTEXT_MENU:
	      {
	        next.contextMenuVisible = false;
	        break;
	      }

	    default:
	      {
	        break;
	      }
	  }

	  next.nodes = next.nodes.map(function (c) {
	    return nodeActionReducer(c, action);
	  });
	  return next;
	}

	function nodeAnnotationReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  var next = Object.assign({}, state);
	  next.nodes = next.nodes || [];
	  next.isLeaf = next.nodes.length === 0;
	  next.nodes = next.nodes.map(function (c) {
	    return nodeAnnotationReducer(c, action);
	  });

	  next.nodes.forEach(function (c, i, nodes) {
	    c.isChildOfRoot = next.isRoot;
	    c.isFirst = i === 0;
	    c.isLast = i === nodes.length - 1;
	    c.isOrphan = c.isFirst && c.isLast;
	  });
	  return next;
	}

	function nodeReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  var next = Object.assign({}, state);
	  return [rootAnnotationReducer, nodeActionReducer, nodeAnnotationReducer].reduce(function (value, reducer) {
	    return reducer(value, action);
	  }, next);
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toolbarReducer;

	var _utils = __webpack_require__(23);

	var initialState = {
	  toolbar: {
	    nodeId: null,
	    parentNodeId: null,
	    add: false,
	    remove: false,
	    demote: false,
	    promote: false,
	    moveup: false,
	    movedown: false
	  }
	};

	function toolbarReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var _action = arguments[1];

	  var next = Object.assign({}, state);

	  next.toolbar = Object.assign({}, state.toolbar);

	  var result = state.tree && state.tree.root ? _utils.storeUtil.findSelectedNode(state.tree.root) : null;
	  var parent = result ? result.parent : null;
	  var node = result ? result.node : null;

	  next.toolbar.nodeId = node ? node.id : null;
	  next.toolbar.parentNodeId = parent ? parent.id : null;
	  next.toolbar.add = node !== null;
	  next.toolbar.remove = node && !node.isRoot;
	  next.toolbar.demote = node && !node.isRoot && !node.isFirst;
	  next.toolbar.promote = node && !node.isRoot && !node.isChildOfRoot;
	  next.toolbar.moveup = node && !node.isFirst;
	  next.toolbar.movedown = node && !node.isLast;

	  return next;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.storeUtil = undefined;

	var _storeUtil = __webpack_require__(24);

	var storeUtil = _interopRequireWildcard(_storeUtil);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.storeUtil = storeUtil;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findNode = findNode;
	exports.findNodeById = findNodeById;
	exports.findSelectedNode = findSelectedNode;
	/*
	 * Find node recursively by given prediction function.
	 * 
	 * Return in format of {parent, node} if a qualified node is found, otherwise null. 
	 */
	function findNode(node, predict) {
	  var parent = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  if (predict(node)) {
	    return {
	      parent: parent,
	      node: node
	    };
	  }

	  if (node.nodes) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = node.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var child = _step.value;

	        var selected = this.findNode(child, predict, node);
	        if (selected !== null) {
	          return selected;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }

	  return null;
	}

	/*
	 * Find node recursively by given id.
	 */
	function findNodeById(node, id) {
	  var parent = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  return this.findNode(node, function (n) {
	    return n.id === id;
	  }, parent);
	}

	/*
	 * Find selected node recursively.
	 */
	function findSelectedNode(node) {
	  var parent = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  return this.findNode(node, function (n) {
	    return n.selected;
	  }, parent);
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contextMenuReducer;

	var _utils = __webpack_require__(23);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var initialState = {
	  contextMenuItems: [{
	    text: 'Add Level',
	    command: 'addLevelNode',
	    disabled: true
	  }, {
	    text: 'Add Area',
	    command: 'addAreaNode',
	    disabled: true
	  }, {
	    text: 'Add Location Option',
	    command: 'addLocationOptionNode',
	    disabled: true
	  }, {
	    separator: true
	  }, {
	    text: 'Add Levels...',
	    disabled: true
	  }, {
	    text: 'Add Areas...',
	    disabled: true
	  }, {
	    disabled: true,
	    text: 'Add Location Options...'
	  }]
	};

	function contextMenuReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var _action = arguments[1];


	  var next = Object.assign({}, state);
	  next.contextMenuItems = next.contextMenuItems ? [].concat(_toConsumableArray(next.contextMenuItems)) : [].concat(_toConsumableArray(initialState.contextMenuItems));

	  var result = state.tree && state.tree.root ? _utils.storeUtil.findNode(state.tree.root, function (n) {
	    return n.contextMenuVisible;
	  }) : null;
	  var node = result ? result.node : null;

	  next.contextMenuItems[0].disabled = !node || !node.isLeaf && node.nodes[0].type !== 'Level';
	  next.contextMenuItems[1].disabled = !node || !node.isLeaf && node.nodes[0].type !== 'Area';
	  next.contextMenuItems[2].disabled = !node || !node.isLeaf && node.nodes[0].type !== 'LocationOption';

	  return next;
	}

/***/ }
/******/ ]);