let glob = require('glob');
let path = require('path');
let router = {};

glob("./wechat-router/*.js", {}, (err, files)=> {
    files.forEach((file)=> {
        let pathName = path.basename(file, '.js');
        let Clazz = require(file)
        router[pathName] = new Clazz();
    });

    router['one'].handler();
    console.log(router);
});