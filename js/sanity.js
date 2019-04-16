/*

var client = window.SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "lwbohv37",
  dataset: "production",
  useCDN: true
});

// Fetch 50 documents of type `movie`, and select only the fields we need
var query =
  '*[_type == "movie"]{"poster": poster.asset->url, title, releaseDate, overview: [{type: 'block'}]}';

console.log(client.fetch(query));

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

  movies.map(function(movie) {
    container.appendChild(createMovieRow(movie));
  });
}

function createPoster(poster) {
  var img = createElement("img");
  img.className = "poster";
  img.src = poster + "?h=240";
  return img;
}

function createMovieRow(movie) {
  return createElement("tr", [
    createElement("td", [createPoster(movie.posterUrl)]),
    createElement("td", [text(movie.title)]),
    createElement("td", [text(movie.releaseDate.utc)]),
    createElement("td", [text(movie.director || "Unknown")])
  ]);
}

function createElement(tag, childNodes) {
  var el = document.createElement(tag);
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
*/

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
