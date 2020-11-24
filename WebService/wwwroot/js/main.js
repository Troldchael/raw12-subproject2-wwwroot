/// <reference path="lib/knockout/knockout-latest.js" />

require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug"
    }
});

require(['knockout', 'viewModel'], function (ko, vm) {
    console.log(vm);
    ko.applyBindings(vm);
});
