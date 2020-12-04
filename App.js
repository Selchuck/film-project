const form = document.getElementById("movie-form");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const url = document.querySelector("#url");

const uI = new UserInterface();

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addMovie);
};

function addMovie(event){
    const titleValue = title.value;
    const directorValue = director.value;
    const urlValue = url.value;

    if (titleValue === "" || directorValue === "" || urlValue === ""){
        console.log("missing input")
    } else {
        const newMovie = new Movie(titleValue, directorValue, urlValue);
        uI.addMovieToUserInterface(newMovie);
    }

    uI.clearInputField(title, director, url)

    event.preventDefault();
};