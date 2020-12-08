define(['knockout', 'services/postman'], (ko, postman) => {

    //let currentComponent = ko.observable("browse-actors");

    let currentComponent = ko.observable("home");
    let menuElements = [
        { name: "Home", component: "homeB" },
        { name: "User", component: "home" },
        { name: "Actors", component: "browse-actors" },
        { name: "Movies", component: "browse-movies" },
        { name: "Search", component: "Search" },
        { name: "Compare", component: ""}


    ]
    let changeContent = element => {

        currentComponent(element.component);
    }

    let isActive = element => {
        return element.component === currentComponent() ? "active" : "";
    }

    postman.subscribe("changeContent", component => {
        changeContent(component);
    });

    return {
       
        currentComponent,
        menuElements,
        changeContent,
        isActive
    };

});