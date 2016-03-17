'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('./tasks.config.js');
const tasks = require('boar-tasks-server').getTasks(gulp, config);
const path = require('path');

gulp.task('build', function(cb) {
  runSequence('build-clean', 'server-copy', cb);
});

gulp.task('start', ['build'], function() {
  gulp.run('server');
  gulp.run('server-watch');
});

// Helper
gulp.task('build-clean', function(cb) { tasks.build.clean(cb); });


// Server Tasks
gulp.task('server', tasks.server.start);
gulp.task('server-copy', function() { return tasks.server.copy(false); });
gulp.task('server-copy-only-changed', function () { return tasks.server.copy(true); });
gulp.task('server-watch', function() { gulp.watch(tasks.config.server.filePattern, ['server-copy-only-changed']) });
