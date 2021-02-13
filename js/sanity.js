/*!
 * Start Bootstrap -  v1.0.0 (https://robertomsoriano.github.io/inyaservicellc)
 * Copyright 2013-2019
 * Licensed under ISC (https://github.com/BlackrockDigital/inyaservicellc/blob/master/LICENSE)
 */

var client = window.SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "dr0jvkad",
  dataset: "production",
  useCdn: false
});

// Fetch 50 documents of type `movie`, and select only the fields we need
var query =
  '*[_type == "post"]{"poster": poster.asset->url, title, releaseDate, description}';
console.log(client.fetch(query))
client
  .fetch(query)
  .then(renderMovies)
  .catch(renderError);

// What follows isn't related to Sanity - just no-framework rendering logic
// Obviously, use whatever framework makes you happy!
var container = document.querySelector("#movies");

function renderMovies(movies) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.className = "col-lg-16 d-flex align-items-stretch";
  container.style =
    "display: flex; justify-content: center; align-items: flex-end;";
  movies.map(function(movie) {
    container.appendChild(createMovieRow(movie));
  });
}

function createPoster(poster) {
  var img = createElement("img");
  img.className = "card-img-top";
  img.style = "padding: 20px;";
  img.src = poster + "?h=150&fit=clip";
  img.width = "286";
  img.height = "180";
  return img;
}

function createMovieRow(movie) {
  return createElement(
    "div",
    [
      createPoster(movie.poster),
      createElement("h5", [text(movie.title)], "card-title", "padding: 20px"),
      createElement(
        "div",
        [text(movie.releaseDate)],
        "",
        "display: flex; align-content: flex-end; font-style: italic; font-size: 14px"
      ),
      createElement("div", [text(movie.description)], "", "bottom:0;")
    ],
    "col-md-3 d-md-inline-block card",
    "width: 18rem; justify-content: center"
  );
}

function createElement(tag, childNodes, className, style) {
  var el = document.createElement(tag);
  el.className = className;
  el.style = style;
  var children = childNodes || [];
  children.forEach(function(child) {
    el.appendChild(child);
  });
  return el;
}

function renderError(err) {
  var errorBox = createElement("pre", [text(err.message)]);
  errorBox.className = "error";

  document.body.replaceChild(errorBox, container.parentNode);
}

function text(str) {
  return document.createTextNode(str);
}

/*


    <table class="pure-table pure-table-bordered movies">
      <thead>
        <tr>
          <th>Poster</th>
          <th>Name</th>
          <th>Year</th>
          <th>Director</th>
        </tr>
      </thead>
    
      <tbody id="movies">
        <tr>
          <td colspan="4">Loading...</td>
        </tr>
      </tbody>
    </table>
*/
