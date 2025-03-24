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
