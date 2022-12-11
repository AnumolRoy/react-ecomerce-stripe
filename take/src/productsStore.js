//cofee-price_1MDhbeSE9rhS0hEDjNxAnHSo
//Sunglasses-price_1MDheESE9rhS0hED5EAU5FY5
//Camera-price_1MDhf3SE9rhS0hEDyISzzmI8

const productsArray = [
    {
        id: "price_1MDhbeSE9rhS0hEDjNxAnHSo",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MDheESE9rhS0hED5EAU5FY5",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MDhf3SE9rhS0hEDyISzzmI8",
        title: "Camera",
        price: 39.99
    }
];

function  getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}



export {productsArray,getProductData};