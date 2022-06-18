
let userdata = JSON.parse(localStorage.getItem('userdata'))

document.querySelector('form').addEventListener('submit',function(){
    login(userdata)
})
console.log(userdata)
function login(userdata){
    event.preventDefault()
    let email = document.querySelector('form').email.value
    let pass = document.querySelector('form').pass1.value
    
    userdata.forEach(function(elem){
        if(email == elem.email && pass == elem.pass1){
            console.log('succss')
            window.location.href = 'product.html'
            
        }else{
            alert('Wrong password')
        }
    })
    
}