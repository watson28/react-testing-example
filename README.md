# React Testing Examples
project with examples on how to create unit test for React components.

## Uses with Docker

### installation
go into folder project and run

```
docker build -t react-example .
```

### Running application
```
docker run --rm -p 8080:8080 -v $(pwd):/workspace react-example npm start
```

### Running tests
Tests are configured to run with karma and Headless Chrome.
```
docker run --rm -p 8080:8080 -v $(pwd):/workspace react-example npm test
```

## Uses without Docker

### installation
nodejs and npm is required

### Running application
```
npm start
```

### Running tests
Running the chrome binary might fail on some systems. That's why is recommended to use the docker image.
```
npm test
```