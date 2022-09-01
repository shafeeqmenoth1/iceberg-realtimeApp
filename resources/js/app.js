import axios from 'axios'
import toastr from 'toastr'
import {initAdmin} from "./admin"

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter')


const updateCart = (icecream)=>{
    axios.post('/update-cart',icecream).then(res=>{
       
        cartCounter.innerText = res.data.totalQty

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "2000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
       command :toastr["success"]("Added to Cart")
        
        
    }).catch(err=>{
        command :toastr["error"]("Something went wrong")
    })
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let icecream = JSON.parse(btn.dataset.icecream);
       updateCart(icecream)
      
    })
})





initAdmin()


// Remove alert Message


// let alertMsg = document.querySelector('#success-alert')


// if(alertMsg){
//     setTimeout(()=>{
//         alertMsg.remove();
//     },1000)
// }


// admin js

 
