const button = document.querySelector('div.button a.btn');
console.log(button);


// button.addEventListener('click', function() {

//     // Creo dentro al main il div contenitore degli square
//     const newMainElement = document.querySelector('main');
//     newMainElement.innerHTML = ('');
//     newMainElement.classList.add('d-flex');
//     const newDivContainer = document.createElement('div');
//     newDivContainer.classList.add('parent','m-auto', 'd-flex', 'flex-wrap');
//     newMainElement.append(newDivContainer);

//     // Creo un loop per i numeri da 1 a 100 e dentro creo gli square che diventeranno blu al click mostrando il numero di casella in console.log
//     for (let i = 1; i <= 100; i++) {
//         const newDivSquare = getNewDivElement(i);
//         newDivSquare.addEventListener('click', function() {
//             newDivSquare.classList.toggle('clicked');
//             console.log(i);
//         });
//         newDivContainer.append(newDivSquare);
//     }
// });

// function getNewDivElement(content) {
//     const newDivSquare = document.createElement('div');
//     newDivSquare.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
//     newDivSquare.innerText = content;

//     return newDivSquare;
// }


button.addEventListener('click', function() {

    // Creo dentro al main il div contenitore degli square
    const newMainElement = document.querySelector('main');
    newMainElement.innerHTML = ('');
    newMainElement.classList.add('d-flex');
    const newDivContainer = document.createElement('div');
    newDivContainer.classList.add('parent','m-auto', 'd-flex', 'flex-wrap');
    newMainElement.append(newDivContainer);

    // Creo un loop per i numeri da 1 a 100 e dentro creo gli square che diventeranno blu al click mostrando il numero di casella in console.log
    for (let i = 1; i <= 100; i++) {

        const newDivSquare = getNewElement('div', i, 'square',);

        newDivSquare.addEventListener('click', function() {
            newDivSquare.classList.toggle('clicked');
            console.log(i);
        });
        newDivContainer.append(newDivSquare);
    }
});

function getNewElement(elementTag, content, classesToAdd) {
    const newDivSquare = document.createElement(elementTag);
    newDivSquare.classList.add(classesToAdd);
    newDivSquare.innerText = content;

    return newDivSquare;
}
















