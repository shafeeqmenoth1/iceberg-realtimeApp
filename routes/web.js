const adminOrderController = require("../app/http/controllers/admin/orderController")
const authController = require("../app/http/controllers/authController")
const cartController = require("../app/http/controllers/customer/cartController")
const orderController = require("../app/http/controllers/customer/orderController")
const homeController = require("../app/http/controllers/homeController")
const auth = require("../app/http/middleware/auth")
const guest = require('../app/http/middleware/guest')
const admin = require('../app/http/middleware/admin')

function initRoutes(app) {

    app.get('/',homeController().index)
    
    
    app.get('/login',guest,authController().login)
    app.post('/login',authController().postLogin)
    app.get('/register',guest,authController().register)
    app.post('/register',authController().postRegister)
    app.post('/logout',authController().logout)

    app.get('/cart',cartController().cart)
    app.post('/update-cart',cartController().update)

    app.post('/orders',auth,orderController().store)
    app.get('/customer/orders',auth,orderController().index)

    // admin routes

    app.get('/admin/orders',admin,adminOrderController().index)
}

module.exports = initRoutes


