require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug",
        text: "lib/require-text/text.min",
        dataservice: "services/dataService"
    }
});

require(['knockout', 'text'], (ko) => {

    ko.components.register('browse-actors', {
        viewModel: { require: "components/actor/actorList"},
        template: { require: "text!components/actor/actorList.html" }

    });


});


require(['knockout', 'viewModel'], (ko, vm) => {

    ko.applyBindings(vm);
});