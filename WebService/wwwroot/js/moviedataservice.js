//Moviedata dataservice

console.log("before fetch");


let getActors = function(callback) {

    fetch("api/actors")
        .then(function(response) {

            return response.json();
        })
        .then(function(data) {
            callback(data);
        });
    
};


getActors(function(data) {
    console.log(data);
});

// create example code
/*createCategory({Name: "ffsf", Description: "sfsfsf"},

    function(data) {
        console.log(data);

});*/

console.log("after fetch!");