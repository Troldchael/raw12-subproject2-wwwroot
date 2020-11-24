define(['knockout'], function (ko) {

    //private part
    let actors = ko.observableArray(
        [{}]
    );

    let primaryName = ko.observable();
    let nConst = ko.observable();


    //public part
    return {
        primaryName,
        nConst,
        actors
    };
});