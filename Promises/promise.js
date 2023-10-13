cart = ['mobiles','computers','laptops','LCDTV','Home Theatre']


function createOrder(cart){
      const pr = new Promise(function(resolve,reject){
        setTimeout(function(){
            let orderId = "12345"
            let err = new Error('cart is not validated')
            if(!validateCart(cart)){
                reject(err)
            }else{
                resolve(orderId)
            }
        },3000)
        
      })

      return pr
}

function validateCart(cart){
    return true;
}

function proceedtoPayment(orderId){
    return new Promise((resolve, reject) => {
        resolve('Payment successfull')
    })
}

const promise = createOrder(cart) 

promise.then(function(orderId){
    console.log(orderId)
    return orderId
})
.then(function(orderId){
    return proceedtoPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(error){
    console.log(error)
})
