define(['knockout'], function(ko) {
    //private part
    let currentTemplate = ko.observable('browseactors');

    //let actorArray = getActors(data);

    let actors = ko.observableArray(
        []
    );

    let primaryName = ko.observable();
    let nConst = ko.observable();

    fetch("api/actors")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            actors(data);
        });

    console.log(actors);


    //public part
    return {
        currentTemplate,
        primaryName,
        nConst,
        actors
    };
});