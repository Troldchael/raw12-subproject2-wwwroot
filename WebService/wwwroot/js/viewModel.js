define(['knockout', 'services/postman'], (ko, postman) => {

    //let currentComponent = ko.observable("browse-actors");

    let currentComponent = ko.observable("browse-movies");
    let menuElements = [
        { name: "Home", component:"browse-movies"},
        {name: "Actors", component: "browse-actors" }]
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