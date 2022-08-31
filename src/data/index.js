const fs = require("fs");

const readDB = (jsonName) =>
 require('./'+ jsonName)

const writeDB = (jsonName, data) =>
  fs.writeFileSync("./" + jsonName, JSON.stringify(data), "utf-8");

module.exports = { readDB, writeDB };
