import axios from 'axios'
import toastr from 'toastr'

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
            "timeOut": "5000",
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