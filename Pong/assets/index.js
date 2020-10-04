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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game/Ball.js":
/*!**************************!*\
  !*** ./src/Game/Ball.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Graphics_Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Graphics/Shape */ \"./src/Graphics/Shape.js\");\n/* harmony import */ var _helper_collisions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/collisions */ \"./src/helper/collisions.js\");\n/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paddle */ \"./src/Game/Paddle.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\r\n\r\n\r\n\r\nvar { BALL_SPEED } = _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; \r\n\r\nclass Ball extends _Graphics_Shape__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n  constructor(x, y, radius) {\r\n      super(x, y, radius, radius);\r\n      this.px = this.x;\r\n      this.py = this.y;\r\n      this.vy = 1;\r\n      this.ay = 0.01;\r\n      this.maxVel = BALL_SPEED;\r\n  } \r\n\r\n  checkBoundsX(width) {\r\n    if(this.x > width-this.width) {\r\n      this.x = width-this.width;\r\n      this.vx *= -1;\r\n    } else if(this.x < 0 + this.width) {\r\n      this.x = 0 + this.width;\r\n      this.vx *= -1;\r\n    }\r\n  }\r\n  update() {\r\n    this.px = this.x;\r\n    this.py = this.y;\r\n  \r\n    this.vy += this.ay;\r\n    this.y += this.vy;\r\n    this.x += this.vx;\r\n    \r\n    this.detectAllCollisions();\r\n    this.vx = Math.min(this.vx, this.maxVel);\r\n    this.vy = Math.min(this.vy, this.maxVel)\r\n  } \r\n  detectAllCollisions() {\r\n    for(const paddle of _Paddle__WEBPACK_IMPORTED_MODULE_2__[\"paddles\"]) {\r\n      this.detectCollision(paddle);\r\n    }\r\n  };\r\n\r\n  detectCollision(other) {\r\n    if(Object(_helper_collisions__WEBPACK_IMPORTED_MODULE_1__[\"isCollision\"])(this, other)) {\r\n      if(Object(_helper_collisions__WEBPACK_IMPORTED_MODULE_1__[\"isCollisionFront\"])(this, other) || Object(_helper_collisions__WEBPACK_IMPORTED_MODULE_1__[\"isCollisionBack\"])(this, other)) {\r\n          this.handleCollisionY(other);\r\n      } else {\r\n        this.handleCollisionX(other);\r\n      }\r\n  } \r\n  }\r\n\r\n  handleCollisionX(other) {\r\n    this.x = this.px;\r\n\r\n    this.vx = -this.vx*2;\r\n    this.vy = -this.vy;\r\n  };\r\n\r\n  handleCollisionY(other) {\r\n    this.y = this.py;\r\n\r\n    this.ay = - this.ay;\r\n    this.vx = other.vx? other.vx*0.5: this.vx;\r\n    this.vy = -this.vy;  \r\n  };\r\n};\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./src/Game/Ball.js?");

/***/ }),

/***/ "./src/Game/Game.js":
/*!**************************!*\
  !*** ./src/Game/Game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _helper_detectmobilebrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/detectmobilebrowser */ \"./src/helper/detectmobilebrowser.js\");\n\r\n\r\nclass Game {\r\n    static init(config) {\r\n        const canv = document.getElementById('canv');\r\n        this.canv = canv;\r\n        this.fps = config.fps;\r\n        this.width = this.getWidth();\r\n        this.height = this.getHeight();\r\n        this.ballSpeed = config.BALL_SPEED;\r\n        this.userControllsPaddle = config.PLAYABLE;\r\n        this.ctx = canv.getContext('2d');\r\n        this.run = false;\r\n        this.isGameOver = false;\r\n        \r\n        this.initMenu();\r\n        this.onCreate();\r\n        this.attachControls();\r\n        this.loop();\r\n    };\r\n    \r\n    static setupCanvas(canv) {\r\n      canv.width = this.width;\r\n      canv.height = this.height;\r\n    }\r\n\r\n    static attachControls() {\r\n        if(this.userControllsPaddle){\r\n            if(Object(_helper_detectmobilebrowser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n              this.mobileControls();\r\n            } else {\r\n              this.controls();\r\n            }\r\n        };\r\n    };\r\n    static initMenu() {\r\n        const menu = document.getElementById('menu');  \r\n        const gameScreen = document.getElementById('canv');\r\n        gameScreen.addEventListener('touchstart', () => {\r\n          this.run = !this.run;\r\n          menu.classList.toggle('invisible')\r\n        })\r\n        document.addEventListener('keydown', ev => {\r\n          if(ev.code === 'Escape' && !this.isGameOver) {\r\n            this.run = !this.run;\r\n            menu.classList.toggle('invisible')\r\n          }\r\n        })\r\n        menu.addEventListener('click', ev => {\r\n          if(!ev.target.classList.contains('menu__el')) return;\r\n          if(ev.target.id === 'start') {\r\n            this.run = true;\r\n            ev.currentTarget.classList.add('invisible');\r\n          }\r\n        })\r\n    }\r\n\r\n    static loop() {\r\n        setTimeout(() => this.loop(), 1000/this.fps);\r\n        this.width = this.getWidth();\r\n        this.height = this.getHeight();\r\n        this.setupCanvas(this.canv)\r\n        if(!this.run) return\r\n        this.clearScreen();\r\n        this.onUpdate();    \r\n    }\r\n\r\n    static clearScreen() {\r\n        this.ctx.fillStyle = 'black';\r\n        this.ctx.fillRect(0, 0, this.width, this.height);\r\n    }\r\n    \r\n    static getHeight() {\r\n      let height = window.visualViewport.height;\r\n      const width = window.visualViewport.width;\r\n      if(width < height) {\r\n        height*=0.7;\r\n      }\r\n      return height;\r\n    }\r\n    \r\n    static getWidth() {\r\n      let height = window.visualViewport.height;\r\n      let width = window.visualViewport.width;\r\n      if(width > height) {\r\n        height*=0.9;\r\n        return height\r\n      }\r\n      return height*0.7*0.9;\r\n    }\r\n    static mobileControls() {\r\n\r\n    }\r\n\r\n    static controls() {\r\n\r\n    }\r\n\r\n\r\n    static onCreate() {\r\n        \r\n    }\r\n\r\n    static onUpdate() {\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/Game/Game.js?");

/***/ }),

/***/ "./src/Game/Paddle.js":
/*!****************************!*\
  !*** ./src/Game/Paddle.js ***!
  \****************************/
/*! exports provided: paddles, Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paddles\", function() { return paddles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paddle\", function() { return Paddle; });\n/* harmony import */ var _Graphics_Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Graphics/Shape */ \"./src/Graphics/Shape.js\");\n\r\n\r\nconst paddles = [];\r\n\r\nclass Paddle  extends _Graphics_Shape__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n  constructor(x, y, { velocity, size }) {\r\n    super(x, y, size, size/7);\r\n    this.ax = 0;\r\n    this.maxA = 0.8;\r\n    this.maxVel = velocity? velocity: 7;\r\n    paddles.push(this)\r\n  };\r\n  \r\n  update() {\r\n    if(this.vx >= this.maxVel || this.vx <= -this.maxVel){\r\n      this.ax = 0;\r\n    }\r\n    this.x += this.vx;\r\n    this.vx += this.ax;\r\n  };\r\n  \r\n  checkBoundsX(width) {\r\n    if(this.x > width-this.width) {\r\n      this.x = width-this.width;\r\n    } else if(this.x < 0 + this.width) {\r\n      this.x = 0 + this.width;\r\n    }\r\n  };\r\n  \r\n  \r\n};\n\n//# sourceURL=webpack:///./src/Game/Paddle.js?");

/***/ }),

/***/ "./src/Game/aiHandler.js":
/*!*******************************!*\
  !*** ./src/Game/aiHandler.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ai; });\nclass Ai {\r\n    static init(screenWidth, screenHeight) {\r\n        this.screenWidth = screenWidth;\r\n        this.screenHeight = screenHeight;\r\n    }\r\n\r\n    static connectAi(self, target, opponent) {\r\n        if(this.readyToMoveRight(self, target)){\r\n            self.vx = self.maxVel;\r\n            self.ax=0;\r\n        } else if(this.readyToMoveLeft(self, target)) {\r\n            self.vx = -self.maxVel;\r\n            self.ax=0;\r\n        } else {\r\n            self.vx = 0;\r\n            if(this.isCloseEnough(self, target)) {\r\n                self.vx = self.x < opponent.x? self.maxVel: -self.maxVel;\r\n            }\r\n        }\r\n    };\r\n\r\n    static readyToMoveRight(self, target) {\r\n        return(\r\n            self.x + self.width*0.75 < target.x + target.width\r\n        && (this.checkDistanceY(self, target) || this.checkDistanceX(self, target))\r\n        )\r\n    };\r\n\r\n    static checkDistanceY(self, target) {\r\n        return Math.abs(self.y - target.y) < this.screenHeight/2.2;\r\n    };\r\n\r\n    static checkDistanceX(self, target) {\r\n        return Math.abs(self.x - target.x) > self.width*5.5;\r\n    };\r\n\r\n    static readyToMoveLeft(self, target) {\r\n        return(\r\n            self.x - self.width*0.75 > target.x - target.width\r\n            && (this.checkDistanceY(self, target) || this.checkDistanceX(self, target))\r\n        )\r\n    };\r\n\r\n    static isCloseEnough(self, target) {\r\n        return Math.max(target.y, self.y) - 30 <= Math.min(target.y, self.y);\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/Game/aiHandler.js?");

/***/ }),

/***/ "./src/Game/scoreHandler.js":
/*!**********************************!*\
  !*** ./src/Game/scoreHandler.js ***!
  \**********************************/
/*! exports provided: scoreLeftHandler, scoreRightHandler, setScoresToZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scoreLeftHandler\", function() { return scoreLeftHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scoreRightHandler\", function() { return scoreRightHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScoresToZero\", function() { return setScoresToZero; });\nconst scoreLeft = document.getElementById('score1');\r\nconst scoreRight = document.getElementById('score2');\r\n\r\nfunction scoreLeftHandler() {\r\n    let score = parseInt(scoreLeft.innerText);\r\n    score++;\r\n    scoreLeft.innerText = score;\r\n    return score\r\n}\r\n\r\nfunction scoreRightHandler() {\r\n    let score = parseInt(scoreRight.innerText);\r\n    score++;\r\n    scoreRight.innerText = score;\r\n    return score\r\n}\r\n\r\nfunction setScoresToZero() {\r\n    scoreLeft.innerText = 0;\r\n    scoreRight.innerText = 0;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Game/scoreHandler.js?");

/***/ }),

/***/ "./src/Graphics/Shape.js":
/*!*******************************!*\
  !*** ./src/Graphics/Shape.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\r\n\r\nconst { SHOW_CENTERS, DEFAULT_COLOR } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\nfunction Point2d(x, y){\r\n    this.x = x;\r\n    this.y = y;\r\n  }\r\n  \r\n  function Shape(x, y, width, height) {\r\n    Point2d.call(this, x, y);\r\n    this.color = DEFAULT_COLOR;\r\n    this.dColor = DEFAULT_COLOR;\r\n    this.width = width*0.5;\r\n    this.height = height*0.5;\r\n    this.vy = 0;\r\n    this.vx = 0;\r\n  }\r\n  \r\n  Shape.prototype = {\r\n    draw: function(ctx) {\r\n      ctx.fillStyle = this.color;\r\n      ctx.fillRect(\r\n        this.x-this.width, this.y+this.height,\r\n        this.width*2, -this.height*2\r\n     );\r\n     if(SHOW_CENTERS){\r\n       ctx.fillStyle = 'red';\r\n       ctx.fillRect(\r\n        this.x-2.5, this.y-2.5, 5, 5\r\n        )\r\n      }\r\n    },\r\n    update: function() {\r\n      \r\n    }\r\n  };\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Shape);\n\n//# sourceURL=webpack:///./src/Graphics/Shape.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//WIDTH : 750,\r\n//HEIGHT: 400   \r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    WIDTH: window.innerWidth,\r\n    HEIGHT: window.innerHeight,\r\n    PLAYABLE: true,\r\n    BALL_SPEED: 3,\r\n    fps: 60,\r\n    DEFAULT_COLOR: 'white'\r\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/controls/controls.js":
/*!**********************************!*\
  !*** ./src/controls/controls.js ***!
  \**********************************/
/*! exports provided: attachMobileControls, attachControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachMobileControls\", function() { return attachMobileControls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachControls\", function() { return attachControls; });\nfunction attachMobileControls(player) {\r\n    var ctrlLeft = document.getElementById('ctrl-left');\r\n    var ctrlRight = document.getElementById('ctrl-right');\r\n    ctrlLeft.addEventListener('touchstart', function(ev) {\r\n      ev.preventDefault();\r\n      player.ax = -player.maxA;\r\n    })\r\n    ctrlLeft.addEventListener('touchend', function(ev) {\r\n      player.vx = 0;\r\n      player.ax = 0;\r\n    })\r\n    ctrlRight.addEventListener('touchstart', function(ev) {\r\n      ev.preventDefault();  \r\n      player.ax = player.maxA;\r\n    })\r\n    ctrlRight.addEventListener('touchend', function(ev) {\r\n      player.vx = 0;\r\n      player.ax = 0;\r\n    })\r\n  }\r\n  \r\nfunction attachControls(player) {\r\n      document.addEventListener('keydown', function(ev) {\r\n          if(ev.code === 'KeyA') {\r\n              player.ax = -player.maxA;\r\n          } else if(ev.code === 'KeyD') {\r\n              player.ax = player.maxA;\r\n          } \r\n        })\r\n        document.addEventListener('keyup', function(ev) {\r\n          if(ev.code === 'KeyA') {\r\n              player.vx = 0;\r\n              player.ax = 0;\r\n              \r\n          } else if(ev.code === 'KeyD') {\r\n              player.vx = 0;\r\n              player.ax = 0;\r\n             \r\n          }\r\n\r\n        })\r\n  }\r\n  \n\n//# sourceURL=webpack:///./src/controls/controls.js?");

/***/ }),

/***/ "./src/helper/collisions.js":
/*!**********************************!*\
  !*** ./src/helper/collisions.js ***!
  \**********************************/
/*! exports provided: isCollision, isCollisionFront, isCollisionBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCollision\", function() { return isCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCollisionFront\", function() { return isCollisionFront; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCollisionBack\", function() { return isCollisionBack; });\nfunction isCollision(self, other) {\r\n  return(\r\n      self.x+self.width > other.x-other.width\r\n      &&other.x+other.width > self.x-self.width \r\n      &&self.y >= other.y-other.height\r\n      &&other.y+other.height >= self.y  \r\n    )\r\n}\r\n\r\nfunction isCollisionFront(self, other) {\r\n  return self.py + self.height > other.y - other.height;\r\n};\r\n\r\nfunction isCollisionBack(self, other) {\r\n  return self.py - self.height < other.y + other.height;\r\n};\n\n//# sourceURL=webpack:///./src/helper/collisions.js?");

/***/ }),

/***/ "./src/helper/detectmobilebrowser.js":
/*!*******************************************!*\
  !*** ./src/helper/detectmobilebrowser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isBrowserMobile; });\nfunction isBrowserMobile() {\r\n    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\r\n        // true for mobile device\r\n        return true;\r\n      }else {\r\n        // false for not mobile device\r\n        return false;\r\n      }\r\n};\n\n//# sourceURL=webpack:///./src/helper/detectmobilebrowser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game/Game */ \"./src/Game/Game.js\");\n/* harmony import */ var _Game_Paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/Paddle */ \"./src/Game/Paddle.js\");\n/* harmony import */ var _Game_Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/Ball */ \"./src/Game/Ball.js\");\n/* harmony import */ var _controls_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/controls */ \"./src/controls/controls.js\");\n/* harmony import */ var _Game_scoreHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game/scoreHandler */ \"./src/Game/scoreHandler.js\");\n/* harmony import */ var _Game_aiHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Game/aiHandler */ \"./src/Game/aiHandler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Pong extends _Game_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n  static onCreate() {\r\n    this.initGameOverMenu();\r\n\r\n    const POSITION_BOTTOM = this.height/1.125;\r\n    const POSITION_TOP = this.height/6;    \r\n\r\n    const playerProperties = { velocity: 7, size: this.width*0.12 };\r\n    const compProperties =  { velocity: 4, isControlledByAi: true, size: this.width*0.12 };\r\n    _Game_aiHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init(this.width, this.height);\r\n\r\n    this.ball = new _Game_Ball__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.width/2, this.height/3, this.width/60);\r\n    this.playerPaddle = new _Game_Paddle__WEBPACK_IMPORTED_MODULE_2__[\"Paddle\"](this.width/2,  POSITION_BOTTOM, playerProperties);\r\n    this.aiPaddle = new _Game_Paddle__WEBPACK_IMPORTED_MODULE_2__[\"Paddle\"](this.width/2, POSITION_TOP, compProperties);\r\n\r\n    this.scoreLeft = 0;\r\n    this.scoreRight = 0;\r\n\r\n    this.objective = 5;\r\n  };\r\n\r\n  static onUpdate() {\r\n    this.checkForGameover();\r\n    this.scoreCheck(this.ball);\r\n    _Game_aiHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].connectAi(this.aiPaddle, this.ball, this.playerPaddle);\r\n\r\n    this.ball.draw(this.ctx);\r\n    this.ball.update();\r\n    this.ball.checkBoundsX(this.width);\r\n\r\n    this.playerPaddle.draw(this.ctx);\r\n    this.playerPaddle.update();\r\n    this.playerPaddle.checkBoundsX(this.width);\r\n\r\n    this.aiPaddle.draw(this.ctx);\r\n    this.aiPaddle.update();\r\n    this.aiPaddle.checkBoundsX(this.width);\r\n  };\r\n\r\n  static checkForGameover() {\r\n    if(this.scoreLeft >= this.objective) {\r\n      this.gameOver({title: 'YOU WON!'});\r\n    } else if(this.scoreRight >= this.objective) {\r\n      this.gameOver({title: 'GAME OVER!'});\r\n    }\r\n  };\r\n\r\n  static hideMobileCOntrols() {    \r\n    if(!isBrowserMobile()) {\r\n        const btns = document.querySelectorAll('button');\r\n        btns.forEach(btn => btn.style.display = 'none')\r\n    }  \r\n  };\r\n\r\n  static controls() {\r\n    var ctrlLeft = document.getElementById('ctrl-left');\r\n    var ctrlRight = document.getElementById('ctrl-right');\r\n    ctrlLeft.classList.add('invisible')\r\n    ctrlRight.classList.add('invisible')\r\n    Object(_controls_controls__WEBPACK_IMPORTED_MODULE_4__[\"attachControls\"])(this.playerPaddle)\r\n  };\r\n\r\n  static mobileControls() {\r\n    Object(_controls_controls__WEBPACK_IMPORTED_MODULE_4__[\"attachMobileControls\"])(this.playerPaddle);\r\n  };\r\n\r\n\r\n  static scoreCheck(obj){\r\n    if(obj.y > this.height) {\r\n        obj.x = this.width/2;\r\n        obj.y = this.height/4;\r\n        obj.vy = this.ballSpeed;\r\n        obj.vx = 0;\r\n        this.scoreRight = Object(_Game_scoreHandler__WEBPACK_IMPORTED_MODULE_5__[\"scoreRightHandler\"])()\r\n        \r\n      } else if(obj.y < 0-obj.height*2 ){\r\n        obj.x = this.width/2;\r\n        obj.y = this.height/1.2;\r\n        obj.vy =- this.ballSpeed;\r\n        obj.vx = 0;\r\n        this.scoreLeft = Object(_Game_scoreHandler__WEBPACK_IMPORTED_MODULE_5__[\"scoreLeftHandler\"])();\r\n      }\r\n    };\r\n\r\n    static gameOver(msg) {\r\n      this.run = false;\r\n      this.isGameOver = true;\r\n      this.openGameOverMenu(msg);\r\n    };\r\n\r\n    static openGameOverMenu(msg) {\r\n      const menu = document.getElementById('menu-gameover');\r\n      const title = menu.querySelector('.menu__title');\r\n      title.textContent = msg.title;\r\n\r\n      menu.classList.remove('invisible')\r\n    };\r\n\r\n    static initGameOverMenu() {\r\n      document.getElementById('menu-gameover').addEventListener('click', ev => {\r\n        console.log(ev.target.classList.contains('menu__el'));\r\n        if(!ev.target.classList.contains('menu__el')) return;\r\n        ev.currentTarget.classList.add('invisible');\r\n        this.restart();\r\n      });\r\n    };\r\n\r\n    static restart() {\r\n      Object(_Game_scoreHandler__WEBPACK_IMPORTED_MODULE_5__[\"setScoresToZero\"])();\r\n      this.scoreLeft = 0;\r\n      this.scoreRight = 0;\r\n      this.ball.vy = 1;\r\n      this.playerPaddle.x = this.width/2;\r\n      this.aiPaddle.x = this.width/2;\r\n      this.isGameOver = false;\r\n      this.run = true;\r\n    }\r\n};\r\n\r\n\r\nPong.init(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });