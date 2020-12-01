define([], () => {
    const actorApiUrl = "api/actors";

    let getJson = (url, callback) => {
        fetch(url).then(response => response.json()).then(callback);
    };

    let getActors = (url, callback) => {
        if (url === undefined) {
            url = productApiUrl;
        }
        getJson(url, callback);
    };

    let getActorsUrlWithPageSize = size => actorApiUrl + "?pageSize=" + size;


    return {
        getActors,
        getActor: getJson,
        getActorsUrlWithPageSize
    };
});