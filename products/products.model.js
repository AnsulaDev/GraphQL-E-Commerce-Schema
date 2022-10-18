const products = [
    {
        id: 'whiteshoe',
        description: 'White Shoe',
        price:43.23,
        reviews: [],
    },
    {
        id: 'blackhoodie',
        description:'Black Hoodie',
        price:60.3,
        reviews: [],
    }
];

function getAllProducts() {
    return products;
}
function getAllProductsByPrice(min, max){
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}
function getAllProductsById(id){
    return products.find((product) => {
        return product.id === id;
    });
}
function addNewProduct(id, description, price){
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}
function addNewProductReview(id,rating,comment){
    const matchedProduct = getAllProductsById(id);

    if(matchedProduct){
        const newProductReview = {
            rating,
            comment,
        };
        matchedProduct.reviews.push(newProductReview);

        return newProductReview;
    }
}
module.exports = {
    getAllProducts,
    getAllProductsByPrice,
    getAllProductsById,
    addNewProduct,
    addNewProductReview,

};