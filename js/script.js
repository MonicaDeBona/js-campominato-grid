for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Creo dentro al main il div contenitore degli square
const newMainElement = document.querySelector('main');
const newDivContainer = document.createElement('div');
newMainElement.append(newDivContainer);