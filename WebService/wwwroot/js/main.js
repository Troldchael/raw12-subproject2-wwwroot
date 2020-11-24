
/// <reference path="lib/knockout/knockout-latest.js" />


require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug"
    }
});


require(['knockout'], function (ko) {
    //console.log(vm.name);
    ko.applyBindings({});
});
