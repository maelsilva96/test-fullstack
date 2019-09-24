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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes.ts\");\nclass App {\n    constructor() {\n        this.express = express();\n        this.middlewares();\n        this.routes();\n    }\n    middlewares() {\n        this.express.use(express.json());\n    }\n    routes() {\n        this.express.use(routes_1.default);\n    }\n}\nexports.default = new App().express;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/app/business/productBusiness.ts":
/*!*********************************************!*\
  !*** ./src/app/business/productBusiness.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ProductBusiness {\n}\nexports.ProductBusiness = ProductBusiness;\n\n\n//# sourceURL=webpack:///./src/app/business/productBusiness.ts?");

/***/ }),

/***/ "./src/app/business/userBusiness.ts":
/*!******************************************!*\
  !*** ./src/app/business/userBusiness.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst user_1 = __webpack_require__(/*! ../models/user */ \"./src/app/models/user.ts\");\nconst userViewModel_1 = __webpack_require__(/*! ../models/viewModel/userViewModel */ \"./src/app/models/viewModel/userViewModel.ts\");\nconst argumentException_1 = __webpack_require__(/*! ../../exceptions/argumentException */ \"./src/exceptions/argumentException.ts\");\nclass UserBusiness {\n    create(userDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (userDTO.name == null || !userDTO.name)\n                throw new argumentException_1.ArgumentException(\"Nome obrigatório!\");\n            if (userDTO.email == null || !userDTO.email)\n                throw new argumentException_1.ArgumentException(\"E-mail obrigatório!\");\n            if (userDTO.password == null || !userDTO.password)\n                throw new argumentException_1.ArgumentException(\"Senha obrigatória!\");\n            let user = yield user_1.default.create({\n                name: userDTO.name,\n                password: yield userDTO.passwordEncrypted(),\n                email: userDTO.email\n            });\n            return new userViewModel_1.UserViewModel(user.id, user.name, user.email, user.createdAt.toISOString(), user.updatedAt.toISOString());\n        });\n    }\n    findByEmailAndPassword(userAuth) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let { email, password } = userAuth;\n            let user = yield user_1.default.findOne({ where: { email } });\n            if (!user)\n                throw new Error(\"Usuário não encontrado!\");\n            if (!(yield user.checkPassword(password)))\n                throw new Error(\"Senha inválida!\");\n            return new userViewModel_1.UserViewModel(user.id, user.name, user.email, user.createdAt.toISOString(), user.updatedAt.toISOString());\n        });\n    }\n}\nexports.UserBusiness = UserBusiness;\n\n\n//# sourceURL=webpack:///./src/app/business/userBusiness.ts?");

/***/ }),

/***/ "./src/app/controllers/authController.ts":
/*!***********************************************!*\
  !*** ./src/app/controllers/authController.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst userBusiness_1 = __webpack_require__(/*! ../business/userBusiness */ \"./src/app/business/userBusiness.ts\");\nconst userDTO_1 = __webpack_require__(/*! ../models/dto/userDTO */ \"./src/app/models/dto/userDTO.ts\");\nconst authDTO_1 = __webpack_require__(/*! ../models/dto/authDTO */ \"./src/app/models/dto/authDTO.ts\");\nclass AuthController {\n    constructor(userBusiness) {\n        if (AuthController.userBusiness == null) {\n            AuthController.userBusiness = userBusiness;\n        }\n    }\n    login(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let userData = req.body;\n            try {\n                let user = yield AuthController.userBusiness.findByEmailAndPassword(authDTO_1.AuthDTO.cast(userData));\n                return res.status(200).json({\n                    user: user,\n                    token: yield user.generateToken()\n                });\n            }\n            catch (e) {\n                return res.status(401).json({ message: e.message });\n            }\n        });\n    }\n    createAndAuth(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let userData = req.body;\n            try {\n                let user = yield AuthController.userBusiness.create(userDTO_1.UserDTO.cast(userData));\n                return res.status(200).json({\n                    user: user,\n                    token: yield user.generateToken()\n                });\n            }\n            catch (e) {\n                return res.status(401).json({ message: e.message });\n            }\n        });\n    }\n}\nexports.default = new AuthController(new userBusiness_1.UserBusiness());\n\n\n//# sourceURL=webpack:///./src/app/controllers/authController.ts?");

/***/ }),

/***/ "./src/app/controllers/productController.ts":
/*!**************************************************!*\
  !*** ./src/app/controllers/productController.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst productBusiness_1 = __webpack_require__(/*! ../business/productBusiness */ \"./src/app/business/productBusiness.ts\");\nclass ProductController {\n    constructor(productBusiness) {\n        if (ProductController.productBusiness == null) {\n            ProductController.productBusiness = productBusiness;\n        }\n    }\n    listAll(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return res.json();\n        });\n    }\n}\nexports.ProductController = ProductController;\nexports.default = (new ProductController(new productBusiness_1.ProductBusiness()));\n\n\n//# sourceURL=webpack:///./src/app/controllers/productController.ts?");

/***/ }),

/***/ "./src/app/models/dto/authDTO.ts":
/*!***************************************!*\
  !*** ./src/app/models/dto/authDTO.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst argumentException_1 = __webpack_require__(/*! ../../../exceptions/argumentException */ \"./src/exceptions/argumentException.ts\");\nclass AuthDTO {\n    static cast(userData) {\n        if (!userData.email)\n            throw new argumentException_1.ArgumentException(\"Atributo email não encontrado!\");\n        if (!userData.password)\n            throw new argumentException_1.ArgumentException(\"Atributo senha não encontrado!\");\n        let auth = new AuthDTO();\n        auth.email = userData.email;\n        auth.password = userData.password;\n        return auth;\n    }\n}\nexports.AuthDTO = AuthDTO;\n\n\n//# sourceURL=webpack:///./src/app/models/dto/authDTO.ts?");

/***/ }),

/***/ "./src/app/models/dto/userDTO.ts":
/*!***************************************!*\
  !*** ./src/app/models/dto/userDTO.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\nconst argumentException_1 = __webpack_require__(/*! ../../../exceptions/argumentException */ \"./src/exceptions/argumentException.ts\");\nclass UserDTO {\n    passwordEncrypted() {\n        return __awaiter(this, void 0, void 0, function* () {\n            let salt = yield bcrypt.genSalt(8);\n            return yield bcrypt.hash(this.password, salt);\n        });\n    }\n    static cast(userData) {\n        if (!userData.name)\n            throw new argumentException_1.ArgumentException(\"Atributo nome não encontrado!\");\n        if (!userData.email)\n            throw new argumentException_1.ArgumentException(\"Atributo email não encontrado!\");\n        if (!userData.password)\n            throw new argumentException_1.ArgumentException(\"Atributo senha não encontrado!\");\n        let user = new UserDTO();\n        user.name = userData.name;\n        user.email = userData.email;\n        user.password = userData.password;\n        return user;\n    }\n}\nexports.UserDTO = UserDTO;\n\n\n//# sourceURL=webpack:///./src/app/models/dto/userDTO.ts?");

/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst config = __webpack_require__(/*! ./../../config/database.js */ \"./src/config/database.js\");\nlet sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);\nexports.default = sequelize;\n\n\n//# sourceURL=webpack:///./src/app/models/index.ts?");

/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/app/models/index.ts\");\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\nclass User extends sequelize_1.Model {\n    checkPassword(password) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield bcrypt.compare(password, this.password);\n        });\n    }\n}\nUser.init({\n    id: {\n        type: sequelize_1.DataTypes.INTEGER,\n        autoIncrement: true,\n        primaryKey: true,\n    },\n    name: {\n        type: new sequelize_1.DataTypes.STRING(150),\n        allowNull: false,\n    },\n    email: {\n        type: new sequelize_1.DataTypes.STRING(150),\n        allowNull: true\n    },\n    password: {\n        type: new sequelize_1.DataTypes.STRING(150),\n        allowNull: true\n    }\n}, {\n    tableName: 'user',\n    sequelize: index_1.default\n});\nexports.default = User;\n\n\n//# sourceURL=webpack:///./src/app/models/user.ts?");

/***/ }),

/***/ "./src/app/models/viewModel/userViewModel.ts":
/*!***************************************************!*\
  !*** ./src/app/models/viewModel/userViewModel.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nclass UserViewModel {\n    constructor(id, name, email, createdAt, updatedAt) {\n        this.id = id;\n        this.name = name;\n        this.email = email;\n        this.createdAt = createdAt;\n        this.updatedAt = updatedAt;\n    }\n    generateToken() {\n        return jwt.sign({ id: this.id }, process.env.APP_SECRET);\n    }\n}\nexports.UserViewModel = UserViewModel;\n\n\n//# sourceURL=webpack:///./src/app/models/viewModel/userViewModel.ts?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config({\n    path:  false ? undefined : \".env\"\n});\n\nmodule.exports = {\n    host: process.env.DB_HOST,\n    username: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    dialect: process.env.DB_DIALECT || \"mysql\",\n    storage: \"./__tests__/database.sqlite\",\n    logging: false,\n    define: {\n        timestamps: true,\n        underscored: true,\n        underscoredAll: true\n    }\n};\n\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/exceptions/argumentException.ts":
/*!*********************************************!*\
  !*** ./src/exceptions/argumentException.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ArgumentException extends Error {\n}\nexports.ArgumentException = ArgumentException;\n\n\n//# sourceURL=webpack:///./src/exceptions/argumentException.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst authController_1 = __webpack_require__(/*! ./app/controllers/authController */ \"./src/app/controllers/authController.ts\");\nconst productController_1 = __webpack_require__(/*! ./app/controllers/productController */ \"./src/app/controllers/productController.ts\");\nconst route = express_1.Router();\nroute.post(\"/auth\", authController_1.default.login);\nroute.put(\"/createAndAuth\", authController_1.default.createAndAuth);\nroute.get(\"/product/list\", productController_1.default.listAll);\nexports.default = route;\n\n\n//# sourceURL=webpack:///./src/routes.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\napp_1.default.listen(process.env.PORT || 3333);\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });