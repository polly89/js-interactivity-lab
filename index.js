// console.log('hello world')

const inputField = document.querySelector('input');
const message = document.querySelector('#message')


function addMovie (event){
    event.preventDefault();
    const movie = document.createElement('li');

    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
   
    movie.appendChild(movieTitle);
    const list = document.querySelector('ul');
    list.appendChild(movie); 

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    inputField.value = ''
}

function deleteMovie (event){
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted'
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back to the list.'
    }
}

document.querySelector('form').addEventListener('submit', addMovie);

