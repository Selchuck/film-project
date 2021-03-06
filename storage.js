function Storage() {

};

Storage.prototype.addMovieToLocalStorage = function(newMovie) {
    let movies = this.getMoviesFromLocalStorage();

    movies.push(newMovie);

    localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.getMoviesFromLocalStorage = function() {
let movies;

    if (localStorage.getItem("movies") === null){
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    };

    return movies;
};

Storage.prototype.deleteMovieFromLocalStorage = function(movieTitle) {
    let movies = this.getMoviesFromLocalStorage();

    movies.forEach(function(movie, index) {
        if(movie.title === movieTitle) {
            movies.splice(index, 1);
        }
    });

    localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.clearMovieListFromLocalStorage = function() {
    localStorage.removeItem("movies");
};
