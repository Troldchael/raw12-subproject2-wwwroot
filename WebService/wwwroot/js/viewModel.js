define(['knockout'], (ko) => {

    //let currentComponent = ko.observable("browse-actors");

    let actorsComponent = ko.observable("browse-actors");
    let moviesComponent = ko.observable("browse-movies");
    let ratingsComponent = ko.observable("rating-history");

    return {
        //currentComponent,
        actorsComponent,
        moviesComponent,
        ratingsComponent
    };

});