define(['knockout', 'services/postman'], (ko, postman) => {

    //let currentComponent = ko.observable("browse-actors");

    let actorsComponent = ko.observable("browse-actors");
    let moviesComponent = ko.observable("browse-movies");
    let ratingsComponent = ko.observable("rating-history");

    let currentComponent = ko.observable("home");
    let menuElements = ["Home", "Contact"];
    let changeContent = element => {

        currentComponent(element.toLowerCase());
    }

    let isActive = element => {
        return element.toLowerCase() === currentComponent() ? "active" : "";
    }

    postman.subscribe("changeContent", component => {
        changeContent(component);
    });

    return {
        //currentComponent,
        actorsComponent,
        moviesComponent,
        ratingsComponent,
        currentComponent,
        menuElements,
        changeContent,
        isActive
    };

});