//RESUELVE TUS EJERCICIOS AQUI

// EJERCICIO 1
function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((data) => data.message);
}

console.log(getAllBreeds());

// EJERCICIO 2
function getRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => data.message);
}

console.log(getRandomDog());

// EJERCICIO 3
function getAllImagesByBreed() {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((data) => data.message);
}

console.log(getAllImagesByBreed());

// EJERCICIO 4
function getAllImagesByBreed2(raza) {
  return fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((data) => data.message);
}

console.log(getAllImagesByBreed2(komondor));

// EJERCICIO 5
function getGitHubUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => data);
}

console.log(getGitHubUserProfile("ignaciotalvi"));
