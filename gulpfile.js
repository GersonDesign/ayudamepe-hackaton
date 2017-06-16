var jade 	= require('gulp-jade');
var stylus 	= require('gulp-stylus');
var gulp 	= require('gulp');
var nib 	= require('nib');
var browserSync	= require('browser-sync').create();


gulp.task('serverApoyame', function(){
	browserSync.init({
		/*Para montar el servidor estamo usando el puerto 10000.
		  Para poder utilizarlo, colocamos: localhost:10000 en el navegador */
		server: '../hackaton/public',
		port: 10000
	});
	
	gulp.watch("*.jade", ["compilarJade"]);
	gulp.watch("*.styl", ["compilarStylus"]);
});





gulp.task('compilarJade',function(){
	gulp.src('*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('public'))
		.pipe(browserSync.stream());
});

gulp.task('compilarStylus',function(){
	 gulp.src('*.styl')
        .pipe(stylus({ use: nib(), compress: true }))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});


