//var fs = require("fs");
//var Sequelize = require("sequelize");
//const dotenv = require('dotenv');
//dotenv.config();
//sequelize = new Sequelize(
//    process.env.POSTGRES_DB ,
//    process.env.POSTGRES_USER,
//    process.env.POSTGRES_PW,
//    {
//        host: process.env.PSQL_HOST || "localhost",
//        dialect: "postgres",
//        pool: {
//            max: 100,
//            min: 0,
//            idle: 200000,
//            // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
//            acquire: 1000000,
//        },
//    }
//);
//sequelize
//    .authenticate()
//    .then(() => {
//    })
//    .catch(err => {
//        console.error('Unable to connect to the database:', POSTGRES_DB,POSTGRES_USER, PSQL_HOST, err);
//        console.log('Buscar ' + process.env.POSTGRES_DB + '  User  ' + process.env.POSTGRES_USER + '  host   ' + process.env.PSQL_HOST);
//    });
//console.log(process.env.POSTGRES_DB,process.env.POSTGRES_USER,process.env.PSQL_HOST)
//var db = {};
//console.log(sequelize)
//const base_dir = __dirname + "/../entities";
//fs.readdirSync(base_dir).filter(function (item) {
//    return fs.statSync(base_dir + "/" + item).isDirectory();
//}).forEach(function (parent_dir) {
//    fs.readdirSync(base_dir + "/" + parent_dir).filter(function (dir) {
//        return (dir === 'model' || dir === 'models') && fs.statSync(base_dir + "/" + parent_dir + "/" + dir).isDirectory();
//    }).forEach(function (model_dir) {
//        var current_dir = base_dir + "/" + parent_dir + "/" + model_dir;
//        fs.readdirSync(current_dir).filter(function (file) {
//            return file.indexOf('.model.') > 0 && fs.statSync(current_dir + "/" + file).isFile();
//        }).forEach(function (model_file) {
//            var file = current_dir + "/" + model_file;
//            var model = sequelize.import(file);
//            db[model.name] = model;
//        });
//    });
//});
//
//Object.keys(db).forEach(function (modelName) {
//    if ("associate" in db[modelName]) {
//        db[modelName].associate(db);
//    }
//});
//
//db.sequelize = sequelize;
//
//module.exports = db;
