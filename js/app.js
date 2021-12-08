let listProducts = JSON.parse(localStorage.getItem(`listProductsKey`)) || [];
let inputSearch = document.querySelector(`#inputSearch`);


inputSearch.addEventListener("keyup", (e) => {
    let searchString = e.target.value;
    let filteredProducts = listProducts.filter(product => {
        return product.product.includes(searchString) || product.description.includes(searchString);
    });
    createCard(filteredProducts);
});

let createCard = (listProducts) => {
    let htmlString = listProducts.map((product) => {
        return `<div class="col-sm-12 col-md-6 col-lg-4 p-3">
        <div class="card h-100">
        <img src="${product.url}" class="card-img-top imgCard" alt="${product.product}">
        <div class="card-body">
        <h5 class="card-title">${product.product}</h5>
        <p class="card-text">${product.description}</p>
        <a href="error404.html" class="btn btn-primary w-100">Ver</a>
        </div>
        </div>
        </div>`;
    }).join(``);
    let grid = document.querySelector(`#grid`);
    grid.innerHTML = htmlString;
};

function initialCard(product){
    let grid = document.querySelector(`#grid`);
    grid.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 p-3">
    <div class="card h-100">
    <img src="${product.url}" class="card-img-top imgCard" alt="${product.product}">
    <div class="card-body">
    <h5 class="card-title">${product.product}</h5>
    <p class="card-text">${product.description}</p>
    <a href="error404.html" class="btn btn-primary w-100">Ver</a>
    </div>
    </div>
    </div>`;
};

function initialLoad(){
    if(listProducts.length > 0){
        listProducts.forEach((itemProduct) =>{initialCard(itemProduct)});
    }
}

initialLoad();