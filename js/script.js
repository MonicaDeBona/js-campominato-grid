// Creo dentro al main il div contenitore degli square
const newMainElement = document.querySelector('main');
newMainElement.classList.add('d-flex',)
const newDivContainer = document.createElement('div');
newDivContainer.classList.add('parent','m-auto', 'd-flex', 'flex-wrap');
newMainElement.append(newDivContainer);

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const newDivSquare = document.createElement('div');
    newDivSquare.classList.add('square')
    newDivContainer.append(newDivSquare);
}


