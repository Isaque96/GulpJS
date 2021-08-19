const { series, parallel } = require('gulp');

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app.js');
const { depsCSS, depsFonts } = require('./gulpTasks/deps.js');
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor.js');

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
);