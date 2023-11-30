function renderCarBrand(select) {

    const bmw = document.createElement('option');
    const audi = document.createElement('option');
    const mercedes = document.createElement('option');

    bmw.innerHTML = 'BMW';
    audi.innerHTML = 'Audi';
    mercedes.innerHTML = 'Mercedes';

    select.append(bmw, audi, mercedes);
    // console.log('1')
}

function renderNotebooksBrand(select) {

    const asus = document.createElement('option');
    const aser = document.createElement('option');
    const dell = document.createElement('option');

    asus.innerHTML = 'Asus';
    aser.innerHTML = 'Aser';
    dell.innerHTML = 'DELL';

    select.append(asus, aser, dell);
}