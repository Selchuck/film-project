const form = document.getElementById("movie-form");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const url = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];


const uI = new UserInterface();

const storageData = new Storage();

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function() {
        let movies = storageData.getMoviesFromLocalStorage();
        uI.loadAllMovies(movies);
    });

    cardBody.addEventListener("click", deleteMovie)
};

function addMovie(event){
    const titleValue = title.value;
    const directorValue = director.value;
    const urlValue = url.value;

    if (titleValue === "" || directorValue === "" || urlValue === ""){
        uI.displayMessage(
            "Please fill in all the required fields to add Movie to the list below.", 
            "danger"
        );
    } else {
        const newMovie = new Movie(titleValue, directorValue, urlValue);

        uI.addMovieToUserInterface(newMovie);

        storageData.addMovieToLocalStorage(newMovie);

        uI.displayMessage(`${titleValue} has been added to list successfully.`, "success");

    }

    uI.clearInputField(title, director, url)

    event.preventDefault();
};

function deleteMovie(event) {
    if(event.target.id === "delete-movie") {
        uI.deleteMovieFromUserInterface(event.target);
        storageData.deleteMovieFromLocalStorage(
            event.target.parentElement
            .previousElementSibling.previousElementSibling.textContent
        );

        uI.displayMessage("Movie been deleted successfully", "success");
    };
};