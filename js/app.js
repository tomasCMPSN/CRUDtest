let listProducts = JSON.parse(localStorage.getItem(`listProductsKey`)) || [];

listProducts.forEach((product)=>{ createCard(product)});

function createCard(product){
    let grid = document.querySelector(`#grid`);
    grid.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 p-3">
    <div class="card h-100">
      <img src="${product.url}" class="card-img-top" alt="${product.product}" style="height: 30rem">
      <div class="card-body">
        <h5 class="card-title">${product.product}</h5>
        <p class="card-text">${product.description}</p>
        <a href="error404.html" class="btn btn-primary w-100">Ver</a>
      </div>
    </div>
</div>`
}