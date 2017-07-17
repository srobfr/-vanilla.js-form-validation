const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');
const htmlreplace = require('gulp-html-replace');


const folders = [
    "./css/*",
    "./img/**",
    "./js/*",
    "./index.html"
];

const productionFolders = [
    "./img/**",
    "./index.html"
];

gulp.task('clean', () => {
    return gulp.src('./build')
        .pipe(clean())
});

gulp.task('build', ['clean'], () => {
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))
});

gulp.task('babelize', ['build'], () => {
    gulp.src('build/js/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('prefix', ['babelize'], () => {
    gulp.src('./build/css/base.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            grid: false,
            cascade: false
        }))
        .pipe(gulp.dest('./build/css'))
});

gulp.task('dev', ['prefix']);

gulp.task('clearProd', () => {
    return gulp.src('./production')
        .pipe(clean())
});

gulp.task('copyToProduction', ['clearProd'], () => {
    return gulp.src(productionFolders,{base:'./'})
        .pipe(gulp.dest('./production/'))
});

gulp.task('concat', ['copyToProduction'], () => {
    return gulp.src('./build/js/**')
        .pipe(concat('formValidation.min.js'))
        .pipe(gulp.dest('production/js'));
});

gulp.task('ugly', ['concat'], (cb) => {
    pump([
            gulp.src('./production/js/formValidation.min.js'),
            uglify(),
            gulp.dest('production/js')
        ],
        cb
    );
});

gulp.task('minify-css',['ugly'], () => {
    return gulp.src('build/css/*')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('production/css/'));
});

gulp.task('replacement', ['minify-css'], () => {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'js': 'js/formValidation.min.js'
        }))
        .pipe(gulp.dest('production/'));
});

gulp.task('production', ['replacement']);

