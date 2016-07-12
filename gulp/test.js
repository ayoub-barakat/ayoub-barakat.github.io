/**
 * Created by obito on 04/03/16.
 */
var gulp   = require('gulp')
var mocha   = require('gulp-mocha')

gulp.task('testBackEndSrv', function () {
    return gulp.src(['test/server/controllers/users.js',
            'test/server/controllers/profile/education.js',
            'test/server/controllers/profile/experience.js',
            'test/server/controllers/profile/project.js',
            'test/server/controllers/profile/competence.js',
            'test/server/controllers/profile/language.js',
            'test/server/controllers/profile/other.js',
            'test/server/controllers/profile/expectation.js'
    ])
        .pipe(mocha({reporter: 'nyan'}));
})
