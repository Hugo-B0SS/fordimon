var gulp =        require ('gulp'),
	sass =        require ('gulp-sass'),
	browserSync = require ('browser-sync');
	csscomb = require('gulp-csscomb');

gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
		.pipe(sass().on('Error', sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
	});

gulp.task('csscomb', function() {
 	return gulp.src('app/css/main.css')
	    .pipe(csscomb())
	    .pipe(gulp.dest('./build/css'));
});

gulp.task('browser-sync', function() {
	browserSync ({
		server: {
			baseDir: 'app'
		},
	});
});

gulp.task('watch', ['browser-sync','sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});