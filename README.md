# NETFLEX - A Simple Movie Database API Implementation

# --- IN PROGRESS ---

// WARNING:
// There is a temproary limit on getMoviesPerGenre to limit api calls:
    return [genres[0]] // temprorary limit: remove [...[0]]


// NEXT:
- include navigation bar with Home, Filter, and Search options
- filter option
- mobile responsive
- testing
- prop types
- trim the data in getMoviesPerGenre()
- bug: when scrolling, user ends entering movie details


## API Issues

Fetching from the frontend was not always working:

```
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

So I shifted to calling the api from the node server and make it available to frontend via endpoints.



## Notes

Fetching data directly from the Frontend does not work due to a CORS issue:
```
Access to fetch at 'https://www.themoviedb.org/documentation/api/genre/movie/list' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```
