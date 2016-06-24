## This plugin not tested

### This is pug fork of [jade-php](https://github.com/viniwrubleski/jade-php)

### Usage

    var jade = require('gulp-pug-php');

    gulp.task('templates', function() {
      gulp.src('./views/**/*.pug')
        .pipe(pug({
            locals: {
              title: 'OMG THIS IS THE TITLE'
            }
         }))
         .pipe(gulp.dest('./dist'));
    });

### Options

Since this module based on gulp-pug, it supports everything mentioned in its [README](https://github.com/jamen/gulp-pug#pugopts).

Also you can customize the extension of the outputted files. By default the extension will be `.php`, but you can pass `extension: '.phtml'` to generate phtml files.
