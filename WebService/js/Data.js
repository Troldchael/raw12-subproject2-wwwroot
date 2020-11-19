console.log("before fetch");

let getCategories = function(callback) {

    fetch("api/categories")
        .then(function(response) {

            return response.json();
        })
        .then(function(data) {
            callback(data);

        });
    
};

let createCategory = function(category, callback) {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("api/categories", { method: "POST", body: JSON.stringify(category), headers })
        .then(response => response.json())
        .then(data => callback(data));
};

getCategories(function(data) {
    console.log(data);
});

/*createCategory({Name: "ffsf", Description: "sfsfsf"},

    function(data) {
        console.log(data);

});*/

console.log("after fetch!");