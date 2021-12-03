export class Product{
    constructor(campCode, campProduct, campDescription, campURL){
        this.code = campCode;
        this.product = campProduct;
        this.description = campDescription;
        this.url = campURL;
    }

    get showCode(){
        return this.code;
    }

    get showProduct(){
        return this.product;
    }

    get showDescription(){
        return this.description;
    }

    get showURL(){
        return this.url;
    }

    set updateCode(newCode){
        this.code = newCode;
    }

    set updateProduct(newProduct){
        this.product = newProduct;
    }

    set updateDescription(newDescription){
        this.description = newDescription;
    }

    set updateURL(newURL){
        this.url = newURL;
    }
}