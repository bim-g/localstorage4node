"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
console.log("start with localstorage test in ts");
var UI = src_1.default.getItem("userid");
console.log("ui", UI);
src_1.default.setItem("userid", "12345");
src_1.default.setItem("username", "ibrahim");
src_1.default.setItem("token", "1awDrgyJ2ZscFvHNk");
console.log("setting user id");
UI = src_1.default.getItem("userid");
console.log("ui", UI);
