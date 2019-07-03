const request = require('request');

function downloadPage(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            console.log("downloadPage - end");
            resolve(body);
        });
    });
}

var p1 = new Promise(function (resolve, reject) {    
    resolve("Promise 1 !");
});

var p2 = new Promise(function (resolve, reject) {
    resolve("Promise 2 !");
});

p1.then(result => {
    console.log("result", result);
}).then(result => {
    downloadPage('https://microsoft.com').then(function(){
        p2.then(result => {
            console.log("result", result);
        })
    });
});