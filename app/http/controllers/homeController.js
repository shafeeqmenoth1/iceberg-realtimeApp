const Menu = require("../../models/menu")


const homeController = ()=>{

    return {
       async index(req,res){

            let icecream = await Menu.find()
          return  res.render('home',{icecream:icecream})
        }
    }
}

module.exports = homeController