const orders = [
    {
        date: '2022-10-10',
        subtotal:90.22,
        items:[{
            product:{
                id:'whiteshoe',
                description:'New White Shoe',
                price:42.12,
            },
            quantity: 2,
        }]
    }
];

function getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders,
};