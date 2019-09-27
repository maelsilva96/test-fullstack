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

/***/ "./src/app/business/logUserBusiness.ts":
/*!*********************************************!*\
  !*** ./src/app/business/logUserBusiness.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst argumentException_1 = __webpack_require__(/*! ../../exceptions/argumentException */ \"./src/exceptions/argumentException.ts\");\nconst logUser_1 = __webpack_require__(/*! ../models/logUser */ \"./src/app/models/logUser.ts\");\nclass LogUserBusiness {\n    create(logUserDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!logUserDTO.operation || logUserDTO.operation == \"\")\n                throw new argumentException_1.ArgumentException(\"Operação obrigatória!\");\n            if (!logUserDTO.message || logUserDTO.message == \"\")\n                throw new argumentException_1.ArgumentException(\"Mensagem obrigatória!\");\n            let logUser = yield logUser_1.default.create({\n                user_id: logUserDTO.userId,\n                operation: logUserDTO.operation,\n                message: logUserDTO.message\n            });\n            return yield logUser.asViewModel();\n        });\n    }\n    getAllByUerId(userId) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let logs = yield logUser_1.default.findAll({\n                where: {\n                    user_id: userId\n                }\n            });\n            let logsVM = new Array();\n            for (let log of logs)\n                logsVM.push(yield log.asViewModel());\n            return logsVM;\n        });\n    }\n}\nexports.LogUserBusiness = LogUserBusiness;\n\n\n//# sourceURL=webpack:///./src/app/business/logUserBusiness.ts?");

/***/ }),

/***/ "./src/app/business/productBusiness.ts":
/*!*********************************************!*\
  !*** ./src/app/business/productBusiness.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst product_1 = __webpack_require__(/*! ../models/product */ \"./src/app/models/product.ts\");\nconst argumentException_1 = __webpack_require__(/*! ../../exceptions/argumentException */ \"./src/exceptions/argumentException.ts\");\nclass ProductBusiness {\n    findAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            let products = yield product_1.default.findAll({});\n            let productsViewModel = new Array();\n            yield products.forEach((item, i) => {\n                productsViewModel.push(item.asViewModel());\n            });\n            return productsViewModel;\n        });\n    }\n    create(productDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.validations(productDTO);\n            let product = yield product_1.default.create({\n                name: productDTO.name,\n                description: productDTO.description,\n                image: productDTO.image,\n                evaluation: productDTO.evaluation\n            });\n            return product.asViewModel();\n        });\n    }\n    update(productDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!productDTO.id)\n                throw new argumentException_1.ArgumentException(\"Identificador obrigatório!\");\n            this.validations(productDTO);\n            let save = yield product_1.default.update({\n                name: productDTO.name,\n                description: productDTO.description,\n                image: productDTO.image,\n                evaluation: productDTO.evaluation\n            }, {\n                where: {\n                    id: productDTO.id\n                }\n            });\n            if (save) {\n                return yield this.findById(productDTO.id);\n            }\n            else\n                throw new Error(\"Houve uma falha ao processar sua requisição!\");\n        });\n    }\n    findById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let product = (yield product_1.default.findOne({\n                where: {\n                    id: id\n                }\n            }));\n            if (product)\n                return product.asViewModel();\n            else\n                throw new Error(\"Produto inexistente!\");\n        });\n    }\n    deleteById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let product = (yield product_1.default.destroy({\n                where: {\n                    id: id\n                }\n            }));\n            if (!product)\n                throw new Error(\"Houve uma falha ao processar sua requisição!\");\n        });\n    }\n    validations(productDTO) {\n        if (productDTO.name == \"\" || !productDTO.name)\n            throw new argumentException_1.ArgumentException(\"Nome obrigatório!\");\n        if (productDTO.description == \"\" || !productDTO.description)\n            throw new argumentException_1.ArgumentException(\"Descrição obrigatória!\");\n        if (productDTO.image == \"\" || !productDTO.image)\n            throw new argumentException_1.ArgumentException(\"Imagem obrigatória!\");\n        if (!productDTO.evaluation && productDTO.evaluation != 0)\n            throw new argumentException_1.ArgumentException(\"Avaliação obrigatória!\");\n        if (productDTO.evaluation < 1 || productDTO.evaluation > 5)\n            throw new argumentException_1.ArgumentException(\"Avaliação tem que ser entre 1 e 5!\");\n    }\n}\nexports.ProductBusiness = ProductBusiness;\n\n\n//# sourceURL=webpack:///./src/app/business/productBusiness.ts?");

/***/ }),

/***/ "./src/app/business/userBusiness.ts":
/*!******************************************!*\
  !*** ./src/app/business/userBusiness.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst user_1 = __webpack_require__(/*! ../models/user */ \"./src/app/models/user.ts\");\nconst argumentException_1 = __webpack_require__(/*! ../../exceptions/argumentException */ \"./src/exceptions/argumentException.ts\");\nclass UserBusiness {\n    create(userDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (userDTO.name == null || !userDTO.name)\n                throw new argumentException_1.ArgumentException(\"Nome obrigatório!\");\n            if (userDTO.email == null || !userDTO.email)\n                throw new argumentException_1.ArgumentException(\"E-mail obrigatório!\");\n            if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(userDTO.email))\n                throw new argumentException_1.ArgumentException(\"E-mail inválido!\");\n            if (userDTO.password == null || !userDTO.password)\n                throw new argumentException_1.ArgumentException(\"Senha obrigatória!\");\n            if (yield this.findByEmail(userDTO.email))\n                throw new Error(\"E-mail já cadastrado!\");\n            let user = yield user_1.default.create({\n                name: userDTO.name,\n                password: yield userDTO.passwordEncrypted(),\n                email: userDTO.email\n            });\n            return user.asViewModel();\n        });\n    }\n    findByEmailAndPassword(userAuth) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let user = yield this.findByEmail(userAuth.email);\n            if (!user)\n                throw new Error(\"Usuário não encontrado!\");\n            if (!(yield user.checkPassword(userAuth.password)))\n                throw new Error(\"Senha inválida!\");\n            return user.asViewModel();\n        });\n    }\n    findByEmail(email) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return (yield user_1.default.findOne({ where: { email } }));\n        });\n    }\n}\nexports.UserBusiness = UserBusiness;\n\n\n//# sourceURL=webpack:///./src/app/business/userBusiness.ts?");

/***/ }),

/***/ "./src/app/controllers/authController.ts":
/*!***********************************************!*\
  !*** ./src/app/controllers/authController.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst userBusiness_1 = __webpack_require__(/*! ../business/userBusiness */ \"./src/app/business/userBusiness.ts\");\nconst userDTO_1 = __webpack_require__(/*! ../models/dto/userDTO */ \"./src/app/models/dto/userDTO.ts\");\nconst authDTO_1 = __webpack_require__(/*! ../models/dto/authDTO */ \"./src/app/models/dto/authDTO.ts\");\nclass AuthController {\n    constructor(userBusiness) {\n        if (AuthController.userBusiness == null) {\n            AuthController.userBusiness = userBusiness;\n        }\n    }\n    login(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let userData = req.body;\n            try {\n                let user = yield AuthController.userBusiness.findByEmailAndPassword(authDTO_1.AuthDTO.cast(userData));\n                return res.status(200).json({\n                    user: user,\n                    token: yield user.generateToken()\n                });\n            }\n            catch (e) {\n                return res.status(401).json({ message: e.message });\n            }\n        });\n    }\n    createAndAuth(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let userData = req.body;\n            try {\n                let user = yield AuthController.userBusiness.create(userDTO_1.UserDTO.cast(userData));\n                res.setHeader(\"token\", yield user.generateToken());\n                return res.status(201).json();\n            }\n            catch (e) {\n                return res.status(401).json({ message: e.message });\n            }\n        });\n    }\n}\nexports.default = new AuthController(new userBusiness_1.UserBusiness());\n\n\n//# sourceURL=webpack:///./src/app/controllers/authController.ts?");

/***/ }),

/***/ "./src/app/controllers/imageController.ts":
/*!************************************************!*\
  !*** ./src/app/controllers/imageController.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ImageController {\n    saveFile(req, res) {\n        let routeFile = `${process.env.APP_ROUTE}${ImageController.routeForAccess}${req.file.filename}`;\n        try {\n            return res.status(201).header({\n                image: routeFile\n            }).json();\n        }\n        catch (e) {\n            return res.status(400).json({ message: e.message });\n        }\n    }\n}\nImageController.routeForAccess = \"/files/\";\nexports.default = (new ImageController());\n\n\n//# sourceURL=webpack:///./src/app/controllers/imageController.ts?");

/***/ }),

/***/ "./src/app/controllers/logUserController.ts":
/*!**************************************************!*\
  !*** ./src/app/controllers/logUserController.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logUserBusiness_1 = __webpack_require__(/*! ../business/logUserBusiness */ \"./src/app/business/logUserBusiness.ts\");\nclass LogUserController {\n    constructor(logUserBusiness) {\n        if (LogUserController.logUserBusiness == null) {\n            LogUserController.logUserBusiness = logUserBusiness;\n        }\n    }\n    getAllByUser(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                let logs = yield LogUserController.logUserBusiness.getAllByUerId(parseInt(req.body.user_id));\n                return res.status(200).json({\n                    logsUser: logs\n                });\n            }\n            catch (e) {\n                return res.status(401).json({ message: e.message });\n            }\n        });\n    }\n}\nexports.default = (new LogUserController(new logUserBusiness_1.LogUserBusiness()));\n\n\n//# sourceURL=webpack:///./src/app/controllers/logUserController.ts?");

/***/ }),

/***/ "./src/app/controllers/productController.ts":
/*!**************************************************!*\
  !*** ./src/app/controllers/productController.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst productBusiness_1 = __webpack_require__(/*! ../business/productBusiness */ \"./src/app/business/productBusiness.ts\");\nconst productDTO_1 = __webpack_require__(/*! ../models/dto/productDTO */ \"./src/app/models/dto/productDTO.ts\");\nclass ProductController {\n    constructor(productBusiness) {\n        if (ProductController.productBusiness == null) {\n            ProductController.productBusiness = productBusiness;\n        }\n    }\n    listAll(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                let products = ProductController.productBusiness.findAll();\n                return res.status(200).json({\n                    products: products\n                });\n            }\n            catch (e) {\n                return res.status(400).json({ message: e.message });\n            }\n        });\n    }\n    create(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                yield ProductController.productBusiness.create(productDTO_1.ProductDTO.cast(req.body));\n                return res.status(201).json();\n            }\n            catch (e) {\n                return res.status(400).json({ message: e.message });\n            }\n        });\n    }\n    update(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                let productDTO = productDTO_1.ProductDTO.cast(req.body);\n                productDTO.id = parseInt(req.params.productId);\n                let product = yield ProductController.productBusiness.update(productDTO);\n                return res.status(200).json({\n                    product: product\n                });\n            }\n            catch (e) {\n                return res.status(400).json({ message: e.message });\n            }\n        });\n    }\n    findById(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                let product = yield ProductController.productBusiness.findById(parseInt(req.params.productId));\n                return res.status(200).json({\n                    product: product\n                });\n            }\n            catch (e) {\n                return res.status(404).json({ message: e.message });\n            }\n        });\n    }\n    delete(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                yield ProductController.productBusiness.deleteById(parseInt(req.params.productId));\n                return res.status(204).json();\n            }\n            catch (e) {\n                return res.status(404).json({ message: e.message });\n            }\n        });\n    }\n}\nexports.ProductController = ProductController;\nexports.default = (new ProductController(new productBusiness_1.ProductBusiness()));\n\n\n//# sourceURL=webpack:///./src/app/controllers/productController.ts?");

/***/ }),

/***/ "./src/app/middleware/auth.ts":
/*!************************************!*\
  !*** ./src/app/middleware/auth.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nclass Auth {\n    validToken(req, res, next) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let authHeader = req.headers.authorization;\n            if (!authHeader)\n                return res.status(401).json({ message: \"Token não existente!\" });\n            const [, token] = authHeader.split(\" \");\n            try {\n                let decoded = yield jwt.verify(token, process.env.APP_SECRET);\n                //@ts-ignore\n                req.body.user_id = decoded.id;\n                return next();\n            }\n            catch (err) {\n                return res.status(401).json({ message: \"Token inválido!\" });\n            }\n        });\n    }\n}\nexports.default = (new Auth());\n\n\n//# sourceURL=webpack:///./src/app/middleware/auth.ts?");

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

/***/ "./src/app/models/dto/productDTO.ts":
/*!******************************************!*\
  !*** ./src/app/models/dto/productDTO.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst argumentException_1 = __webpack_require__(/*! ../../../exceptions/argumentException */ \"./src/exceptions/argumentException.ts\");\nclass ProductDTO {\n    static cast(productData) {\n        if (!productData.name)\n            throw new argumentException_1.ArgumentException(\"Atributo nome não encontrado!\");\n        if (!productData.description)\n            throw new argumentException_1.ArgumentException(\"Atributo descrição não encontrado!\");\n        if (!productData.image)\n            throw new argumentException_1.ArgumentException(\"Atributo imagem não encontrado!\");\n        if (!productData.evaluation)\n            throw new argumentException_1.ArgumentException(\"Atributo avaliação não encontrado!\");\n        let auth = new ProductDTO();\n        auth.name = productData.name;\n        auth.description = productData.description;\n        auth.image = productData.image;\n        auth.evaluation = productData.evaluation;\n        return auth;\n    }\n}\nexports.ProductDTO = ProductDTO;\n\n\n//# sourceURL=webpack:///./src/app/models/dto/productDTO.ts?");

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

/***/ "./src/app/models/logUser.ts":
/*!***********************************!*\
  !*** ./src/app/models/logUser.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/app/models/index.ts\");\nconst user_1 = __webpack_require__(/*! ./user */ \"./src/app/models/user.ts\");\nconst logUserViewModel_1 = __webpack_require__(/*! ./viewModel/logUserViewModel */ \"./src/app/models/viewModel/logUserViewModel.ts\");\nclass LogUser extends sequelize_1.Model {\n    getUser() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield user_1.default.findOne({\n                where: {\n                    id: this.user_id\n                }\n            });\n        });\n    }\n    asViewModel() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return new logUserViewModel_1.LogUserViewModel(this.id, this.operation, this.message, (yield this.getUser()).asViewModel(), this.createdAt.toISOString());\n        });\n    }\n}\nexports.LogUser = LogUser;\nLogUser.init({\n    id: {\n        type: sequelize_1.DataTypes.INTEGER,\n        autoIncrement: true,\n        primaryKey: true,\n    },\n    user_id: {\n        type: sequelize_1.DataTypes.INTEGER,\n        allowNull: false,\n    },\n    operation: {\n        type: new sequelize_1.DataTypes.STRING(50),\n        allowNull: true\n    },\n    message: {\n        type: new sequelize_1.DataTypes.STRING(150),\n        allowNull: true\n    }\n}, {\n    tableName: 'log_user',\n    sequelize: index_1.default\n});\nexports.default = LogUser;\n\n\n//# sourceURL=webpack:///./src/app/models/logUser.ts?");

/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/app/models/index.ts\");\nconst ProductViewModel_1 = __webpack_require__(/*! ./viewModel/ProductViewModel */ \"./src/app/models/viewModel/ProductViewModel.ts\");\nclass Product extends sequelize_1.Model {\n    asViewModel() {\n        return new ProductViewModel_1.ProductViewModel(this.name, this.description, this.image, this.evaluation, this.createdAt.toISOString(), this.updatedAt.toISOString(), this.id);\n    }\n}\nProduct.init({\n    id: {\n        type: sequelize_1.DataTypes.INTEGER,\n        autoIncrement: true,\n        primaryKey: true\n    },\n    name: {\n        type: new sequelize_1.DataTypes.STRING(250),\n        allowNull: true\n    },\n    description: {\n        type: new sequelize_1.DataTypes.STRING(500),\n        allowNull: true\n    },\n    image: {\n        type: new sequelize_1.DataTypes.STRING(250),\n        allowNull: true\n    },\n    evaluation: {\n        type: new sequelize_1.DataTypes.NUMBER,\n        allowNull: true\n    }\n}, {\n    tableName: 'product',\n    sequelize: index_1.default\n});\nexports.default = Product;\n\n\n//# sourceURL=webpack:///./src/app/models/product.ts?");

/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/app/models/index.ts\");\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\nconst userViewModel_1 = __webpack_require__(/*! ./viewModel/userViewModel */ \"./src/app/models/viewModel/userViewModel.ts\");\nclass User extends sequelize_1.Model {\n    checkPassword(password) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield bcrypt.compare(password, this.password);\n        });\n    }\n    asViewModel() {\n        return new userViewModel_1.UserViewModel(this.id, this.name, this.email, this.createdAt.toISOString(), this.updatedAt.toISOString());\n    }\n}\nUser.init({\n    id: {\n        type: sequelize_1.DataTypes.INTEGER,\n        autoIncrement: true,\n        primaryKey: true,\n    },\n    name: {\n        type: new sequelize_1.DataTypes.STRING(150),\n        allowNull: false,\n    },\n    email: {\n        type: new sequelize_1.DataTypes.STRING(150),\n        allowNull: true\n    },\n    password: {\n        type: new sequelize_1.DataTypes.STRING(150),\n        allowNull: true\n    }\n}, {\n    tableName: 'user',\n    sequelize: index_1.default\n});\nexports.default = User;\n\n\n//# sourceURL=webpack:///./src/app/models/user.ts?");

/***/ }),

/***/ "./src/app/models/viewModel/ProductViewModel.ts":
/*!******************************************************!*\
  !*** ./src/app/models/viewModel/ProductViewModel.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ProductViewModel {\n    constructor(name, description, image, evaluation, createAt, updateAt, id) {\n        this.name = name;\n        this.description = description;\n        this.image = image;\n        this.evaluation = evaluation;\n        this.createAt = createAt;\n        this.updateAt = updateAt;\n        this.id = id;\n    }\n}\nexports.ProductViewModel = ProductViewModel;\n\n\n//# sourceURL=webpack:///./src/app/models/viewModel/ProductViewModel.ts?");

/***/ }),

/***/ "./src/app/models/viewModel/logUserViewModel.ts":
/*!******************************************************!*\
  !*** ./src/app/models/viewModel/logUserViewModel.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass LogUserViewModel {\n    constructor(id, operation, message, user, createdAt) {\n        this.id = id;\n        this.operation = operation;\n        this.message = message;\n        this.user = user;\n    }\n}\nexports.LogUserViewModel = LogUserViewModel;\n\n\n//# sourceURL=webpack:///./src/app/models/viewModel/logUserViewModel.ts?");

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

/***/ "./src/config/upload.ts":
/*!******************************!*\
  !*** ./src/config/upload.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst storage = multer.diskStorage({\n    destination: function (req, file, cb) {\n        cb(null, \"tmp/uploads/\");\n    },\n    filename: function (req, file, cb) {\n        cb(null, `${(new Date()).toISOString()}-${file.originalname}`);\n    }\n});\nconst uploads = multer({\n    storage: storage,\n    fileFilter: function (req, file, cb) {\n        let allowedMimes = [\n            \"image/jpeg\",\n            \"image/jpg\",\n            \"image/png\",\n            \"image/gif\"\n        ];\n        if (allowedMimes.includes(file.mimetype)) {\n            cb(null, true);\n        }\n        else {\n            cb(null, false);\n        }\n    }\n});\nexports.default = uploads;\n\n\n//# sourceURL=webpack:///./src/config/upload.ts?");

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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst upload_1 = __webpack_require__(/*! ./config/upload */ \"./src/config/upload.ts\");\nconst auth_1 = __webpack_require__(/*! ./app/middleware/auth */ \"./src/app/middleware/auth.ts\");\nconst authController_1 = __webpack_require__(/*! ./app/controllers/authController */ \"./src/app/controllers/authController.ts\");\nconst productController_1 = __webpack_require__(/*! ./app/controllers/productController */ \"./src/app/controllers/productController.ts\");\nconst logUserController_1 = __webpack_require__(/*! ./app/controllers/logUserController */ \"./src/app/controllers/logUserController.ts\");\nconst imageController_1 = __webpack_require__(/*! ./app/controllers/imageController */ \"./src/app/controllers/imageController.ts\");\nconst route = express_1.Router();\nroute.post(\"/auth\", authController_1.default.login);\nroute.post(\"/createAndAuth\", authController_1.default.createAndAuth);\nroute.get(\"/product/list\", productController_1.default.listAll);\nroute.use(\"/files\", express.static(\"tmp/uploads\"));\nroute.get(\"/logUser/byUser\", auth_1.default.validToken, logUserController_1.default.getAllByUser);\nroute.post(\"/saveImage\", auth_1.default.validToken, upload_1.default.single(\"image\"), imageController_1.default.saveFile);\nroute.get(\"/product/:productId\", auth_1.default.validToken, productController_1.default.findById);\nroute.post(\"/product\", auth_1.default.validToken, productController_1.default.create);\nroute.put(\"/product/:productId\", auth_1.default.validToken, productController_1.default.update);\nroute.delete(\"/product/:productId\", auth_1.default.validToken, productController_1.default.delete);\nexports.default = route;\n\n\n//# sourceURL=webpack:///./src/routes.ts?");

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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

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