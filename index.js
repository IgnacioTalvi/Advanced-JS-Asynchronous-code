//RESUELVE TUS EJERCICIOS AQUI

// EJERCICIO 1
function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

getAllBreeds().then((data) => console.log(data));

// EJERCICIO 2
function getRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

getRandomDog().then((data) => console.log(data));

// EJERCICIO 3
function getAllImagesByBreed() {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

console.log(getAllImagesByBreed());

// EJERCICIO 4
function getAllImagesByBreed2(raza) {
  return fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

console.log(getAllImagesByBreed2("komondor"));

// EJERCICIO 5
function getGitHubUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

console.log(getGitHubUserProfile("ignaciotalvi"));

// EJERCICIO 6
