/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Type
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';

// Action Creator - UPDATE: with axiosInstance no reference api instead of axios
var fetchUsers = exports.fetchUsers = function fetchUsers() {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return api.get('/users');

						case 2:
							res = _context.sent;
							// /api is appended on here

							// Dispatch comes from redux thunk
							dispatch({
								type: FETCH_USERS,
								payload: res
							});

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	}();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return api.get('/current_user');

						case 2:
							res = _context2.sent;


							dispatch({
								type: FETCH_CURRENT_USER,
								payload: res
							});

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x4, _x5, _x6) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
	return function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return api.get('/admins');

						case 2:
							res = _context3.sent;


							dispatch({
								type: FETCH_ADMINS,
								payload: res
							});

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));

		return function (_x7, _x8, _x9) {
			return _ref3.apply(this, arguments);
		};
	}();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(15);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundePage = __webpack_require__(16);

var _NotFoundePage2 = _interopRequireDefault(_NotFoundePage);

var _UsersListPage = __webpack_require__(17);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _AdminsListPage = __webpack_require__(18);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Original react router solution
// export default () => {
// 	return (
// 		<div>
// 			<Route exact path="/" component={Home} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	);
// };

// Refactor solution for server side, routes as array of objects
// Not showing a path for NotFoundPage, react will show this page if no other route matches
exports.default = [_extends({}, _App2.default, {
	routes: [_extends({}, _HomePage2.default, {
		path: '/',
		exact: true
	}), _extends({}, _AdminsListPage2.default, {
		path: '/admins'
	}), _extends({}, _UsersListPage2.default, {
		path: '/users'
	}), _extends({}, _NotFoundePage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(23);

var _createStore2 = _interopRequireDefault(_createStore);

var _cookieParser = __webpack_require__(29);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _getUser = __webpack_require__(30);

var _getUser2 = _interopRequireDefault(_getUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make use of async await syntax
var OptimizelyService = __webpack_require__(32); // Entry Point for server side JS

var router = _express2.default.Router();
var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

// Middleware
app.use((0, _cookieParser2.default)());
app.use((0, _getUser2.default)());
app.use(OptimizelyService.initialize());

// Routes
// require('./routes')(router);
// app.use(router);

// Proxy - any request of /api will be sent to this domain
app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.heokuapp.com', {
	// For O-Auth process with google flow
	proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
		opts.headers['x-forwarded-host'] = 'localhost:3000';
		return opts;
	}
}));

// Express needs to treat this directory as static directory available to outside world
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
	var store = (0, _createStore2.default)(req);

	// Looks at list of routes and the route the user is trying to access

	// To account for Promise.all failure (jumping to catch, skipping promises that may have been succesful)
	// we wrap route.loadData(store) in new Promise that watches inner promise and resolves no matter what
	var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;

		return route.loadData ? route.loadData(store) : null;
	}).map(function (promise) {
		if (promise) {
			// If is promise, wrap in new promise and always resolve 
			return new Promise(function (resolve, reject) {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	// Promise.all: when a promise in the chain fails all subsequent promises are skipped
	// We jump to the catch
	Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _renderer2.default)(req, store, context);
		if (context.url) {
			return res.redirect(301, context.url);
		}

		if (content.notFound) {
			res.status(404);
		}
		res.send(content);
	});
});

// app.listen(3000, () => {
// 	console.log('Lisenting on port 3000');
// });

app.listen(port, function (err) {
	if (err) {
		console.log('There was an error starting express: ', err);
	} else {
		console.log('Express was started! Listening on port: ' + port);
	}
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(14);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  Review react-router-config docs

var App = function App(_ref) {
	var route = _ref.route;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Header2.default, null),
		(0, _reactRouterConfig.renderRoutes)(route.routes)
	);
};

exports.default = {
	component: App,
	loadData: function loadData(_ref2) {
		var dispatch = _ref2.dispatch;
		return dispatch((0, _actions.fetchCurrentUser)());
	}
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
	var auth = _ref.auth;

	console.log('My auth status is', auth);

	var authButton = auth ? _react2.default.createElement(
		'a',
		{ href: '/api/logout' },
		'Logout'
	) : _react2.default.createElement(
		'a',
		{ href: '/api/auth/google' },
		'Login'
	);

	return _react2.default.createElement(
		'nav',
		null,
		_react2.default.createElement(
			'div',
			{ className: 'nav-wrapper' },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/', className: 'brand-logo' },
				'React SSR'
			),
			_react2.default.createElement(
				'ul',
				{ className: 'right' },
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/users' },
						'Users'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/admins' },
						'Admins'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					authButton
				)
			)
		)
	);
};

function mapStateToProps(_ref2) {
	var auth = _ref2.auth;

	return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		{ className: 'center-align', style: { marginTop: '200px' } },
		_react2.default.createElement(
			'h3',
			null,
			'Welcome'
		),
		_react2.default.createElement(
			'p',
			null,
			'Check out these awesome features'
		)
	);
}; // es2015 modules
exports.default = {
	component: Home
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// context is passed down as a prop as staticContext  will not exist on the browser so we have to set
// default value of an empty object
var NotFoundPage = function NotFoundPage(_ref) {
	var _ref$staticContext = _ref.staticContext,
	    staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

	staticContext.notFound = true;
	return _react2.default.createElement(
		'h1',
		null,
		'Ooops, page not found.'
	);
};

exports.default = {
	component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
	_inherits(UsersList, _Component);

	function UsersList() {
		_classCallCheck(this, UsersList);

		return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
	}

	_createClass(UsersList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchUsers();
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers() {
			return this.props.users.map(function (user) {
				return _react2.default.createElement(
					'li',
					{ key: user.id },
					user.name
				);
			});
		}
	}, {
		key: 'header',
		value: function header() {
			return _react2.default.createElement(
				_reactHelmet.Helmet,
				null,
				_react2.default.createElement(
					'title',
					null,
					this.props.users.length + ' Users Loaded'
				),
				_react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.header(),
				'Here\'s a big list of users:',
				_react2.default.createElement(
					'ul',
					null,
					this.renderUsers()
				)
			);
		}
	}]);

	return UsersList;
}(_react.Component);

function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	// Returns promise representing network request
	return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
	loadData: loadData,
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _requireAuth = __webpack_require__(19);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
	_inherits(AdminsListPage, _Component);

	function AdminsListPage() {
		_classCallCheck(this, AdminsListPage);

		return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
	}

	_createClass(AdminsListPage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchAdmins();
		}
	}, {
		key: 'renderAdmins',
		value: function renderAdmins() {
			return this.props.admins.map(function (admin) {
				return _react2.default.createElement(
					'li',
					{ key: admin.id },
					admin.name
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					null,
					'Protected list of admins'
				),
				_react2.default.createElement(
					'ul',
					null,
					this.renderAdmins()
				)
			);
		}
	}]);

	return AdminsListPage;
}(_react.Component);

function mapStateToProps(_ref) {
	var admins = _ref.admins;

	return { admins: admins };
}

exports.default = {
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
	loadData: function loadData(_ref2) {
		var dispatch = _ref2.dispatch;
		return dispatch((0, _actions.fetchAdmins)());
	}
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// We use a HOC here because we can add the reqiureAuth component
// to many different components more easily
exports.default = function (ChildComponent) {
	var RequireAuth = function (_Component) {
		_inherits(RequireAuth, _Component);

		function RequireAuth() {
			_classCallCheck(this, RequireAuth);

			return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
		}

		_createClass(RequireAuth, [{
			key: 'render',
			value: function render() {
				switch (this.props.auth) {
					case false:
						return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
					case null:
						return _react2.default.createElement(
							'div',
							null,
							'Loading...'
						);
					default:
						return _react2.default.createElement(ChildComponent, this.props);
				}
			}
		}]);

		return RequireAuth;
	}(_react.Component);

	function mapStateToProps(_ref) {
		var auth = _ref.auth;

		return { auth: auth };
	}

	// We are connecting because RA needs to know about user auth status: located on auth state
	return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactHelmet = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common JS or require JS syntax
// const React = require('React');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default; // have to use when using commonJS and export default

// es2015 modules
exports.default = function (req, store, context) {
	// Allows us to write jsx on server side
	// on client side we import jsx into on file 
	// then we webpack, which babel turns into regular js code
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: context },
			_react2.default.createElement(
				'div',
				null,
				(0, _reactRouterConfig.renderRoutes)(_Routes2.default)
			)
		)
	)); // boot up location on server side like client component render

	// renderStatic returns object of all tags
	var helmet = _reactHelmet.Helmet.renderStatic();

	// Load JS bundle from server
	return '\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t' + helmet.title.toString() + '\n\t\t\t\t' + helmet.meta.toString() + '\n\t\t\t\t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n\t\t\t\t</script>\n\t\t\t\t<script src="bundle.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(25);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// axios api argument process only works with our api, otherwise use original axios library
exports.default = function (req) {
	var axiosInstance = _axios2.default.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie') || '' // if users has cookie or empty string to avoid undefined
		} });
	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

	return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(7);

var _usersReducer = __webpack_require__(26);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(27);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(28);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	users: _usersReducer2.default,
	auth: _authReducer2.default,
	admins: _adminsReducer2.default
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_USERS:
			return action.payload.data;
		default:
			return state;
	}
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_CURRENT_USER:
			return action.payload.data || false;
		default:
			return state;
	}
};

var _actions = __webpack_require__(1);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_ADMINS:
			return action.payload.data;
		default:
			return state;
	}
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uuidv4 = __webpack_require__(31);

// Create ID
var createUserId = function createUserId() {
	return uuidv4();
};

module.exports = function () {
	return function (req, res, next) {
		if (req.cookies['optimizely_user']) {
			req.userId = req.cookies['optimizely_user'];
			console.log('userId ' + req.userId);
		} else {
			req.userId = createUserId();
			console.log('createUserId ' + req.userId);
			res.cookie('optimizely_user', req.userId, { expire: new Date() + 1800000 });
		}
		next();
	};
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = __webpack_require__(8);
var optimizely = __webpack_require__(33);

var OptimizelyService = function () {
	function OptimizelyService() {
		var _this = this;

		_classCallCheck(this, OptimizelyService);

		this.client = {};
		this.datafile = null;

		this.getDataFile().then(function () {
			return _this.getClient();
		});
	}

	_createClass(OptimizelyService, [{
		key: 'getClient',
		value: function getClient() {
			this.client = optimizely.createInstance({ datafile: this.datafile, skipJSONValidation: true });
		}
	}, {
		key: 'updateDataFile',
		value: function updateDataFile() {
			this.getDataFile();
		}
	}, {
		key: 'getDataFile',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var res;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return axios.get('https://cdn.optimizely.com/datafiles/MspCQ3UTqvTiQXj4gYYQiN.json');

							case 2:
								res = _context.sent;

								this.datafile = res.data;

								return _context.abrupt('return', Promise.resolve());

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getDataFile() {
				return _ref.apply(this, arguments);
			}

			return getDataFile;
		}()
	}], [{
		key: 'initialize',
		value: function initialize() {
			var optimizely = new OptimizelyService();

			return function (req, res, next) {
				req.optimizely = optimizely;

				// TODO: return an optimizely object && set user ID
				next();
			};
		}
	}]);

	return OptimizelyService;
}();

module.exports = OptimizelyService;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@optimizely/optimizely-sdk");

/***/ })
/******/ ]);