# News aggr

> Customize your news feed by selecting tags or use the search to find news articles

## Installing / Developing

First build image

```shell
docker build -t news-aggr .
```

Second run the docker image.

```shell
 docker run -p 5173:5173 news-aggr
```

The default PORT is:
- `5173` for the client
```

and navigate to `http://localhost:5173/news-aggr`.

## Future work
 - Use RTK
 - Update UI
 - Use js libraries https://github.com/PorterK/GuardianJSClient
 - Refactor components

## Licensing

MIT
