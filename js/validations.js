export function campRequired(input){
    if(input.value.trim().length > 0){
        input.className = `form-control is-valid`;
        return true
    }else{
        input.className = `form-control is-invalid`;
        return false
    }
}

export function validateURL(input){
    let pattern = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(pattern.test(input.value)){
        input.className = `form-control is-valid`;
        return true
    }else{
        input.className = `form-control is-invalid`;
        return false
    }
}

export function validateGeneral(campCode, campProduct, campDescription, campURL){
    let alert = document.querySelector(`#msgAlert`);
    if(campRequired(campCode) &&
    campRequired(campProduct) &&
    campRequired(campDescription) &&
    validateURL(campURL)){
        alert.className = `alert alert-danger mt-4 d-none`
        return true
    }else{
        alert.className = `alert alert-danger mt-4`
        return false
    }
}