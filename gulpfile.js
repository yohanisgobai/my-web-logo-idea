"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");

gulp.task("default", function() {
	// place code for your default task here
	gulp
		.src("src/logo/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("build/logo"));
});
gulp.task("footer", function() {
	gulp
		.src("src/footer/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("build/footer"));
});
gulp.task("menu", function() {
	gulp
		.src("src/menu/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("build/menu"));
});
