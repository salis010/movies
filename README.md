# NETFLEX - A Simple Movie Database API Implementation

# --- IN PROGRESS ---


// NEXT:
- Finalize README file
- bug: when scrolling horizontally, user ends entering movie details


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

## Imporovements

Not enough time to trim off unnescessary data received from the api. The function in '/backend/trim-movies-data' is supposed to do this.