/*jshint node:true*/
module.exports = function(grunt) {
	'use strict';

	// Project configuration
	grunt.initConfig({
		concat: {
			dist: {
				src: [
					'js/first.js',
					'js/second.js'
				],
				dest: 'build/scripts.js'
			}
		},
		meta: {
			banner: '/*! Author: Artem Sapegin, http://sapegin.me, <%= grunt.template.today("yyyy") %> */'
		},
		min: {
			dist: {
				src: [
					'<banner>',
					'<%= concat.dist.dest %>'
				],
				dest: 'build/scripts.min.js'
			}
		},
		watch: {
			concat: {
				// files: '<%= concat.dist.src %>',
				files: 'js/*.js',
				tasks: 'concat'
			}
		},
		server: {
			port: 8000,
			base: '.'
		},
		lint: {
			files: [
				'grunt.js',
				'js/*.js'
			]
		},
		uglify: {}
	});

	// Project tasks
	grunt.registerTask('default', 'lint concat min');
};
