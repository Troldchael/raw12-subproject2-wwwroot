define(['knockout'], function(ko) {
    //private part
    let currentTemplate = ko.observable('browseactors');

    //let actorArray = getActors(data);

    let actors = ko.observableArray([]);

    /*let primaryName = ko.observable();
    let nConst = ko.observable();*/

    fetch("api/actors")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            actors(data);
        });

    // Load and parse the JSON
    var someJSON = actors/* Omitted: fetch it from the server however you want */;
    var parsed = JSON.parse(someJSON);

    // Update view model properties
    actorModel.firstName(parsed.PrimaryName);
    actorModel.pets(parsed.NConst);

    // hint for Json https://knockoutjs.com/documentation/json-data.html

    console.log(actors);


    //public part
    return {
        currentTemplate,
        primaryName,
        nConst,
        actors
    };
});