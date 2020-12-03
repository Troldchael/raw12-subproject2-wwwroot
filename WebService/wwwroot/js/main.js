require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug",
        text: "lib/require-text/text.min",
        jquery: "lib/jquery/jquery.min",
        bootstrap: "lib/twitter-bootstrap/js/bootstrap.bundle.min",
        postman: "lib/services/postman"
    },
    shim: {
        bootstrap: ['jquery']
        dataservice: "services/dataService"
    }
});

require(['knockout', 'text'], (ko) => {
    ko.components.register('home', {
        viewModel: { require: "components/home/home" },
        template: { require: "text!components/home/home.html" }
    });

    ko.components.register('contact', {
        viewModel: { require: "components/contact/contact" },
        template: { require: "text!components/contact/contact.html" }
    });
});



require(['knockout', 'viewModel', 'bootstrap'], (ko, vm) => {

    ko.components.register('browse-actors', {
        viewModel: { require: "components/actor/actorList"},
        template: { require: "text!components/actor/actorList.html" }

    });

    ko.components.register('browse-movies', {
        viewModel: { require: "components/movie/movieList" },
        template: { require: "text!components/movie/movieList.html" }

    });

    ko.components.register('rating-history', {
        viewModel: { require: "components/rating/ratingList" },
        template: { require: "text!components/rating/ratingList.html" }

    });


});


require(['knockout', 'viewModel'], (ko, vm) => {

    ko.applyBindings(vm);
});