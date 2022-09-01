const {Schema,model} = require('mongoose');

const orderSchema = new Schema({
    customerId : {type: Schema.Types.ObjectId, ref : 'User',required: true},
    phone : {type: String, required: true},
    address : {type: String, required: true},
    items : {type: Object, required: true},
    paymentType : {type: String,default: 'COD'},
    status: {type:String, default: 'order_placed'}

 

},{timestamps:true})

const Order = model("Order",orderSchema);

module.exports = Order;