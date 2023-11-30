function renderBrand(select, nameBrand) {

    select.innerHTML = '';
    select.removeAttribute('disabled');

    const emptyOption = document.createElement('option');
    emptyOption.innerHTML = `Выберите бренд: `;
    select.append(emptyOption);

    for (let key in nameBrand) {
        const itemBrand = document.createElement('option');
        itemBrand.innerHTML = key;
        select.append(itemBrand);
    }
}