const form = document.forms.formSelect;
const productNodeList = form.product;
const brand = form.brand;
const model = form.model;
const btn = form.btn;

const productArr = Array.from(productNodeList);

productArr.forEach(function (el) {

    el.onchange = function () {

        model.setAttribute('disabled', true);
        btn.setAttribute('disabled', true);
        model.innerHTML = '';


        if (el.value in products) {
            renderBrand(brand, products[el.value]);
        }
    }
})

brand.onchange = function () {

    const selectedProduct = productNodeList.value;
    const selectedBrand = brand.value;

    if (selectedBrand === 'Выберите бренд:') {

        model.setAttribute('disabled', true);
        model.innerHTML = '';
        btn.setAttribute('disabled', true);

    } else {
        renderModel(model, products[selectedProduct][selectedBrand]);
    }
};
model.onchange = function () {
    btn.removeAttribute('disabled')

    if (model.value === 'Выберите модель:') {
        btn.setAttribute('disabled', true)
    }
}

btn.onclick = function (e) {
    e.preventDefault();
}