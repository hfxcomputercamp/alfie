var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('game.min.js'))
        .pipe(gulp.dest('min'));
});

gulp.task('css', function () {
	return gulp.src(['src/sass/**/*.scss'])
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('min'));
});

gulp.task('image', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('min/images'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/sass/**/*.scss', ['css']);
    gulp.watch('src/images/**/*', ['image']);
});

gulp.task('default', ['js', 'css', 'watch']);