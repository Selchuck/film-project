function UserInterface() {}

UserInterface.prototype.addMovieToUserInterface = function(newMovie) {
    const movieList = document.getElementById("movies");

    movieList.innerHTML += `
        <tr>
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
        </tr>
    `;
};

UserInterface.prototype.clearInputField = function(titleField, directorField, urlField) {
    titleField.value = "";
    directorField.value = "";
    urlField.value = "";
};

UserInterface.prototype.displayMessage = function(message, type) {
    const cardBody = document.querySelector(".card-body");

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function() {
        div.remove();
    }, 2000);
};
