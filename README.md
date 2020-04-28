# NETFLEX - A Simple Movie Database API Implementation

# --- IN PROGRESS ---

// NEXT:
// fetching from the frontend was not working, so I moved to fetching from the backend
// The next day however, fetching from the frontend worked fine!
// If fetching from the frontend continues to work ok, remember to uninstall axios and remove the logic from server.js (save it somewhere!)
// Next: setup redux on the branch 'setup-redux'. The idea is to:
// - fetch the genres
// - save them to the store
// Following this, create another branch, to get a number of movies per genre
// Next, another branch to implement an image gallery (use the one used for surpluz.io)

- redux
- homepage with various genres
- image gallery
- option to get more details about a movie
- serach option
- filter option
- mobile responsive
- testing
- prop types

## Notes

Fetching data directly from the Frontend does not work due to a CORS issue:
```
Access to fetch at 'https://www.themoviedb.org/documentation/api/genre/movie/list' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

## How I did it

- Experiment with  The Movies Database