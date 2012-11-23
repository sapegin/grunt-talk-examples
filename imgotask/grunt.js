/*jshint node:true*/
module.exports = function(grunt) {
	'use strict';

	// Конфигурация
	grunt.initConfig({
		imgo: {
			images: {
				files: 'images/**'
			}
		}
	});

	// Задача для запуска imgo
	grunt.registerMultiTask('imgo', 'Optimize images using imgo', function() {
		var done = this.async(),  // Говорит о том, что вся задача асинхронная
			files = grunt.file.expandFiles(this.data.files);  // Получаем список иходных файлов

		// Обрабатываем каждый файл (тоже асинхронно, потому что spawn() асинхронный)
		grunt.utils.async.forEach(files, function(file, next) {
			// Создаём процесс imgo, передаём ему имя текущего файла
			grunt.utils.spawn({
				cmd: 'imgo',
				args: [file]
			}, next);
		}, done);
	});

	// Задача по умолчанию
	grunt.registerTask('default', 'imgo');
};
