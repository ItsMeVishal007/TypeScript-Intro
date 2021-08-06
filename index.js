"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
function fetchData(url) {
    try {
        axios_1["default"].get(url).then(function (res) {
            var data = res.data;
            var Id = data.id;
            var title = data.title;
            var completed = data.completed;
            console.log("\n        id : " + Id + "\n        Title : " + title + "\n        completed : " + completed + " \n      ");
        });
    }
    catch (err) {
        console.log("failed to fetch");
    }
}
fetchData("https://jsonplaceholder.typicode.com/todos/1");
