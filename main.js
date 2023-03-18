let a = document.createElement('a');
a.href = 'https://romebell.gitbook.io/serifx221/javascript/02more-manipulation';
a.textContent = 'DOM manipulation';

document.body.appendChild('a');

let list = document.getElementById('my-favorite-movies');

let newMovie = document.createElement('Li');

newMovie.textContent = 'Spirited Away';
newMovie.textContent = 'Into the Spiderverse';
newMovie.textContent = 'Interstellar';
newMovie.textContent = 'Inception';
newMovie.textContent = 'The Godfather'

let second = list.children[1];
console.log(second);


list.appendChild(newMovie);

let list1 = document.getElementById('my-closet');
let newItem = document.createElement('li');

newItem.textContent = 'Shirt';
newItem.textContent = 'Pants';
newItem.textContent = 'Shoes';
newItem.textContent = 'Coat';
newItem.textContent = 'Boots';

list1.insertBefore(newItem, second);
