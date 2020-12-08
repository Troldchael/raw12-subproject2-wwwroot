﻿require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug",
        text: "lib/require-text/text.min",
        jquery: "lib/jquery/jquery.min",
        bootstrap: "lib/twitter-bootstrap/js/bootstrap.bundle.min",
        dataservice: "services/dataService"
        //postman: "services/postman"
    },


    shim: {
        bootstrap: ['jquery']
    }
});

require(['knockout', 'text'], (ko) => {

    ko.components.register('home', {
        viewModel: { require: "components/home/home" },
        template: { require: "text!components/home/home.html" }

    });

    ko.components.register('user', {
        viewModel: { require: "components/actor/actorList" },
        template: { require: "text!components/actor/actorList.html" }

    });

    ko.components.register('browse-actors', {
        viewModel: { require: "components/actor/actorList"},
        template: { require: "text!components/actor/actorList.html" }

    });

    ko.components.register('browse-movies', {
        viewModel: { require: "components/movie/movieList" },
        template: { require: "text!components/movie/movieList.html" }

    });

    ko.components.register('search', {
        viewModel: { require: "components/search/searchbar" },
        template: { require: "text!components/search/searchbar.html" }

    });

    ko.components.register('rating-history', {
        viewModel: { require: "components/rating/ratingList" },
        template: { require: "text!components/rating/ratingList.html" }

    });

    /*ko.components.register('compare', {
        viewModel: { require: "components/rating/ratingList" },
        template: { require: "text!components/rating/ratingList.html" }

    });*/


});


require(['knockout', 'viewModel', 'bootstrap'], (ko, vm) => {
    ko.applyBindings(vm);
});