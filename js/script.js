const button = document.querySelector('btn');
button.addEventListener('click', function() {

    // Creo dentro al main il div contenitore degli square
    const newMainElement = document.querySelector('main');
    newMainElement.classList.add('d-flex',)
    const newDivContainer = document.createElement('div');
    newDivContainer.classList.add('parent','m-auto', 'd-flex', 'flex-wrap');
    newMainElement.append(newDivContainer);

    // Creo un loop per i numeri da 1 a 100 e dentro creo gli square che diventeranno blu al click mostrando il numero di casella in console.log
    for (let i = 1; i <= 100; i++) {
        const newDivSquare = document.createElement('div');
        newDivSquare.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
        newDivSquare.innerText = i;

        newDivSquare.addEventListener('click', function() {
            newDivSquare.classList.toggle('clicked');
            console.log(i);
        });

        newDivContainer.append(newDivSquare);
    }

});







