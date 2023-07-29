const { src, dest } = require("gulp");

// TODO===========Конфігурація===================
const path = require("../config/path.js");
const app = require("../config/app.js");

// ?================ Плагини=============================
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require("gulp-pug");
const webpHtml = require("gulp-webp-html");

//* ===========ОПРАЦЮВАННЯ PUG===========================
const pug = () => {
	return src(path.pug.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "Pug",
				message: error.message
			}))
		}))
		.pipe(pugs(app.pug))
		.pipe(webpHtml())
		.pipe(dest(path.pug.dest));
}

module.exports = pug;
