const del = require("del");

// TODO===========Конфігурація===================
const path = require("../config/path.js");

// ?===========Видалення директории=============
const clear = () => {
	return del(path.root);
}

module.exports = clear;