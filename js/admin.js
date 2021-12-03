import {campRequired, validateURL, validateGeneral} from "./validations.js"
let campCode = document.querySelector(`#code`);
let campProduct = document.querySelector(`#product`);
let campDescription = document.querySelector(`#description`);
let campURL = document.querySelector(`#url`);
let formProduct = document.querySelector(`#formProduct`);

campCode.addEventListener(`blur`, () => { campRequired(campCode)});
campProduct.addEventListener(`blur`, () => { campRequired(campProduct)});
campDescription.addEventListener(`blur`, () => { campRequired(campDescription)});
campURL.addEventListener(`blur`, () => { validateURL(campURL)});