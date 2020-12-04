const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const uI = new UserInterface();

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addMovie);
};

function addMovie(event){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        console.log("missing input")
    } else {
        const newMovie = new Movie(title, director, url);
        uI.addMovieToUserInterface(newMovie);
    }
    event.preventDefault();
};