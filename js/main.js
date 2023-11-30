const form = document.forms.formSelect;
const productNodeList = form.product;
const brand = form.brand;
const model = form.model;
const btn = form.btn;

const productArr = Array.from(productNodeList);

productArr.forEach(function (el) {

    el.onchange = function () {

        brand.removeAttribute('disabled');
        model.removeAttribute('disabled');
        btn.removeAttribute('disabled')

        if (el.value === 'cars') {

            brand.innerHTML = '';
            model.innerHTML = '';

            renderCarBrand(brand);
            renderModelBmw(model);

        } else if (el.value === 'notebooks') {

            brand.innerHTML = '';
            model.innerHTML = ''

            renderNotebooksBrand(brand);
            renderModelAsus(model);

            brand.childNodes.onchange = function () {
                console.log('1')
            }
        }
    }

})
brand.onchange = function () {

    if (this.value === 'Asus') {
        model.innerHTML = '';
        renderModelAsus(model);
    } else if (this.value === 'Aser') {
        model.innerHTML = '';
        renderModelAser(model);
    } else if (this.value === 'DELL') {
        model.innerHTML = '';
        renderModelDell(model);


    } else if (this.value === 'BMW') {
        model.innerHTML = '';
        renderModelBmw(model);
    } else if (this.value === 'Audi') {
        model.innerHTML = '';
        renderModelAudi(model);
    } else if (this.value === 'Mercedes') {
        model.innerHTML = '';
        renderModelMercedes(model);
    }
};

btn.onclick = function (e) {
    e.preventDefault();
}

