define(['knockout'], (ko) => {

    //let currentComponent = ko.observable("browse-actors");

    let actorsComponent = ko.observable("browse-actors");
    let moviesComponent = ko.observable("browse-movies");
    let ratingsComponent = ko.observable("rating-history");
    let compareComponent = ko.observable("movie-compare");

    return {
        //currentComponent,
        actorsComponent,
        moviesComponent,
        ratingsComponent,
        compareComponent
    };

});