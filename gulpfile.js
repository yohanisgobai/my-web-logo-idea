"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");

gulp.task("default", function() {
	// place code for your default task here
	gulp
		.src("src/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("build/"));
});
