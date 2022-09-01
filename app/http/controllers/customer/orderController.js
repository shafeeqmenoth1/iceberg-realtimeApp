const { request } = require("express")
const Order = require("../../../models/order")
const moment = require("moment")

const orderController = ()=>{
    return {
       async index(req,res){
        const orders = await Order.find({customerId:req.user._id},null,{sort:{'createdAt': -1}})
        res.header('Cache-Control', 'no-cache', 
        'private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0')
            res.render('customer/orders',{orders,moment})
        },
        store(req,res){
            const {phone,address} = req.body
            if(!phone || !address){
                req.flash('error',"All fields are required")
                return res.redirect('/cart')
            }
            const order = new Order({
                phone,
                address,
                customerId:req.user._id,
                items:req.session.cart.items
            })

            order.save().then(result=>{
                delete req.session.cart
                req.flash('success',"Order placed successfully")
             
               
                return res.redirect('customer/orders')
            }).catch(err=>{
                req.flash('error',"Something went wrong")
                return res.redirect('/cart')
            })
        },
      
    }
}

module.exports= orderController