define(['knockout', 'postman'], (ko, postman) => {
    let currentComponent = ko.observable("home");
    let actorsComponent = ko.observable("actors");
    let moviesComponent = ko.observable("movies");
    let ratingsComponent = ko.observable("rating-history");
    let menuElements = ["Home", "Movies", "Actors", "Compare", "User Page"];
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
        currentComponent,
        menuElements,
        changeContent,
        isActive
        actorsComponent,
        moviesComponent,
        ratingsComponen };
});