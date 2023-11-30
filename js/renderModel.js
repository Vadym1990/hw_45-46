function renderModel(select, nameModel) {

    select.innerHTML = '';
    select.removeAttribute('disabled');

    const emptyOption = document.createElement('option');
    emptyOption.innerHTML = `Выберите модель: `;
    select.append(emptyOption);

    nameModel.forEach(function (el) {
        const itemModel = document.createElement('option');
        itemModel.innerHTML = el;
        select.append(itemModel);
    })
}