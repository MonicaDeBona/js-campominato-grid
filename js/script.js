for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Creo dentro al main il div contenitore degli square
const newMainElement = document.querySelector('main');
newMainElement.classList.add('d-flex',)
const newDivContainer = document.createElement('div');
newDivContainer.classList.add('square','m-auto');
newMainElement.append(newDivContainer);
