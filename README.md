# Nextfile

Modern HTTP file directory made with [Next.js](https://nextjs.org/) and [MUI](https://mui.com/). Heavily inspired by [h5ai](https://github.com/lrsjng/h5ai). Utilizes SSR, i18n and "prefers-color-scheme"

## Application setup
Easiest way to use Nextfile is to use prepared Docker containers available at both ghcr.io and Docker Hub. Run below command with appropriate arguments to get started:
```
docker run -d \
    --name=<container name> \
    -p <host port>:3000/tcp \
    -v <your file directory>:/app/files:ro \
    maxtremee/nextfile
```

## Build
If you prefer to run locally and/or made some changes to the source code build project with:
```
yarn build
```
and run with:
```
yarn start
```
If you still want to use app in containerized environment build new image with:
```
docker build -t <your app name> .
```

## Internationalization
At the moment there's only two translations: english and polish. Feel free to send a pull request with translation for your language.