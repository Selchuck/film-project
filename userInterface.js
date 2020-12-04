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
