const User = require('../models/user')
const bcrypt = require('bcrypt')

const LocalStrategy = require('passport-local').Strategy

 function init(passport){
    passport.use(new LocalStrategy({usernameField:'email'},async(email,password,done)=>{


      const user = await  User.findOne({email:email})
      if(!user){
        return done(null,false,{message : 'User not found'})
      }

      bcrypt.compare(password,user.password).then(match=>{
        if(match){
            return done(null,user,{message : 'Logged Successfully'})
        }
        return done(null,false,{message : 'Wrong username or password'})
      }).catch(err=>{
        return done(null,false,{message : 'Something went wrong'})
      })
    }))



    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })

    passport.deserializeUser((id,done)=>{
        User.findById(id,(err,user)=>{
            done(err,user)
        })
        
    })
}

module.exports = init