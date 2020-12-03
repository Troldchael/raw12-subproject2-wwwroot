define([], () => {
    const actorApiUrl = "api/actors";
    const movieApiUrl = "api/movies";
    const ratingApiUrl = "api/ratings";

    //private
    let getJson = (url, callback) => {
        fetch(url).then(response => response.json()).then(callback);
    };

    //browse actors
    let getActors = (url, callback) => {
        if (url === undefined) {
            url = actorApiUrl;
        }
        getJson(url, callback);
    };

    let getActorsUrlWithPageSize = size => actorApiUrl + "?pageSize=" + size;

    //browse movies
    let getMovies = (url, callback) => {
        if (url === undefined) {
            url = movieApiUrl;
        }
        getJson(url, callback);
    };

    let getMoviesUrlWithPageSize = size => movieApiUrl + "?pageSize=" + size;

    //browse ratings
    let getRatings = (url, callback) => {
        if (url === undefined) {
            url = ratingApiUrl;
        }
        getJson(url, callback);
    };

    let getRatingsUrlWithPageSize = size => ratingApiUrl + "?pageSize=" + size;


    // public
    return {
        getActors,
        getActor: getJson,
        getActorsUrlWithPageSize,
        getMovies,
        getMovie: getJson,
        getMoviesUrlWithPageSize,
        getRatings,
        getRating: getJson,
        getRatingsUrlWithPageSize
    };
});