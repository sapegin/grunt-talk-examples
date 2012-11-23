# Grunt: система сборки для фронтенд-разработчиков

[Презентация](http://sapegin.ru/pres/grunt/).


## Установка Grunt

1. Установите [Node.js](http://nodejs.org/).
2. `$ npm install grunt -g`


## Примеры к докладу

### Статическая страничка с задачами watch и server

В папке `static` запускайте:

```bash
grunt server watch
```

И заходите на [http://localhost:8000/](http://localhost:8000/).


### Пример собственной задачи: запуск imgo

Установите [imgo](https://github.com/imgo/imgo). В папке `imgotask` запускайте:

```bash
grunt
```


### Grunt в теме для Wordpress

В папке `wordpress/wp-content/themes/wordpress/` запускайте:

```bash
grunt watch
```

## Ссылки

* [Сайт Grunt, документация, плагины](http://gruntjs.com/)
* [Грантфайл jQuery](https://github.com/jquery/jquery/blob/master/grunt.js) (весьма продвинутый)
* [H5BP Build configuration](https://github.com/h5bp/node-build-script/wiki/configuration) (ещё один продвинутый грантфайл)
* [Подборка шаблонов grunt init](https://github.com/sapegin/squirrelstrap)
* [Плагин для Sublime Text 2](https://github.com/sapegin/SublimeGruntWatch)
* [grunt-stylus](https://github.com/sapegin/grunt-stylus), [grunt-shower-markdown](https://github.com/sapegin/grunt-shower-markdown), [grunt-imgo](https://github.com/sapegin/grunt-imgo), [grunt-fingerprint](https://github.com/sapegin/grunt-fingerprint), [grunt-sweet](https://github.com/sapegin/grunt-sweet)
* [grunt-exec](https://github.com/jharding/grunt-exec)