import { Product } from "./productClass.js";
import {campRequired, validateURL, validateGeneral} from "./validations.js";
let campCode = document.querySelector(`#code`);
let campProduct = document.querySelector(`#product`);
let campDescription = document.querySelector(`#description`);
let campURL = document.querySelector(`#url`);
let formProduct = document.querySelector(`#formProduct`);
let listProducts = JSON.parse(localStorage.getItem(`listProductsKey`)) || [];
let updateMode = false;
let btnNew = document.querySelector(`#btnNew`);

campCode.addEventListener(`blur`, () => { campRequired(campCode)});
campProduct.addEventListener(`blur`, () => { campRequired(campProduct)});
campDescription.addEventListener(`blur`, () => { campRequired(campDescription)});
campURL.addEventListener(`blur`, () => { validateURL(campURL)});
formProduct.addEventListener(`submit`, saveProduct);
btnNew.addEventListener(`click`, cleanForm);

initialLoad();
createGUID();

function saveProduct(e){
    e.preventDefault();
    if(validateGeneral(campCode, campProduct, campDescription, campURL)){
        if(updateMode == false){
            createProduct();
        }else{
            updateProduct();
        }
    }
}

function saveLocalStorage(){
    localStorage.setItem(`listProductsKey`, JSON.stringify(listProducts));
}

function cleanForm(){
    formProduct.reset();
    campCode.className = `form-control`;
    campProduct.className = `form-control`;
    campDescription.className = `form-control`;
    campURL.className = `form-control`;
    updateMode = false;
    createGUID();
}

function createProduct(){
    let newProduct = new Product(campCode.value, campProduct.value, campDescription.value, campURL.value);
    listProducts.push(newProduct);
    cleanForm();
    saveLocalStorage();
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    );
    createRow(newProduct);
}

function createRow(product){
    let table = document.querySelector(`#tableProducts`);
    table.innerHTML += `<tr>
    <th scope="row">${product.code}</th>
    <td>${product.product}</td>
    <td>${product.description}</td>
    <td>${product.url}</td>
    <td>
        <button class="btn btn-warning w-100 mb-1" onclick="preparateProductUpdate(${product.code})">Editar</button>
        <button class="btn btn-danger w-100" onclick="deleteProduct(${product.code})">Borrar</button>
    </td>
  </tr>`;
}

function initialLoad(){
    if(listProducts.length > 0){
        listProducts.forEach((itemProduct) =>{createRow(itemProduct)});
    }
}

window.preparateProductUpdate = (code) =>{
    let findProduct = listProducts.find((itemProduct)=>{return itemProduct.code == code});
    campCode.value = findProduct.code;
    campProduct.value = findProduct.product;
    campDescription.value = findProduct.description;
    campURL.value = findProduct.url;
    updateMode = true;
}

function deleteTable(){
    let table = document.querySelector(`#tableProducts`);
    table.innerHTML = ``;
}

function updateProduct(){
    let indexProduct = listProducts.findIndex((itemProduct)=>{return itemProduct.code == campCode.value});
    listProducts[indexProduct].product = campProduct.value;
    listProducts[indexProduct].description = campDescription.value;
    listProducts[indexProduct].url = campURL.value;
    saveLocalStorage();
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    );
    cleanForm();
    deleteTable();
    listProducts.forEach((itemProduct) =>{createRow(itemProduct)});
}

window.deleteProduct = function (code){
    let arrayFindProduct = listProducts.filter((itemProduct)=>{return itemProduct.code != code});
    listProducts = arrayFindProduct;
    saveLocalStorage();
    deleteTable();
    listProducts.forEach((itemProduct)=>{createRow(itemProduct)});
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    );
}

function createGUID(){
    function thing(){
        function random(){
            return Math.floor(Math.random() * (99999999 - 10000000) + 10000000)
        }
        return random();
    }
    let uuidd = thing();
    campCode.value = uuidd;
    campCode.setAttribute('disabled', '');
}