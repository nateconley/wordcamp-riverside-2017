const gulp         = require( 'gulp' );
const sass         = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );

gulp.task( 'sass', () => {
	gulp.src( './sass/style.scss' )
		.pipe( sass( {
			style          : 'expanded',
			sourceComments : false,
		} ) )
		.pipe( autoprefixer( {
			browsers: [ 'last 2 versions', 'ie >= 8' ],
		} ) )
		.pipe( gulp.dest( './' ) )
} );

gulp.task( 'watch',  () => {
	gulp.watch( './sass/**/*.scss', ['sass'] );
});

gulp.task( 'default', [ 'sass', 'watch' ] );
