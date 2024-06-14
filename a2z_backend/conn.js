const mysql = require("mysql");
const util = require("util");

//create connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "a2z_clone"
});

const exe = util.promisify(conn.query).bind(conn);

module.exports = exe;