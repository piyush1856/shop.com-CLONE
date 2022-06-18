
let single_product = JSON.parse(localStorage.getItem('single_product'));
let userdata = JSON.parse(localStorage.getItem('userdata'));
let addedcart = JSON.parse(localStorage.getItem('addedcart')) || []
console.log(single_product)
let container = document.createElement('div');
container.setAttribute('id','container');


single_product.forEach(function(elem){
    
    let inner_container = document.createElement('div')
    inner_container.setAttribute('id','inner_container');
    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src',elem.image)
    div1.append(img)
    console.log(addedcart)
    let div2 = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.innerText = elem.name

    let p1 = document.createElement('p')
    p1.innerHTML = 'Sold bye '+elem.brandname+'<br/><br/><br/><br/><br/><br/>'

    let p2 = document.createElement('p')
    p2.innerText = '$'+elem.price

    let hr1 = document.createElement('hr')
    let p3 = document.createElement('p')
    p3.innerText = 'Free Standard Shipping on orders from Ranch & Home.'
    let hr2 = document.createElement('hr')
    let div3 = document.createElement('div')
    let img2 = document.createElement('img');
    img2.setAttribute('src','https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg')
  
    let p4 = document.createElement('p')
    p4.innerHTML = 'Now accepting Crypto at Checkout!'
    let label1 = document.createElement('label')
    label1.innerHTML = 'size:<br/>'
    let drop1 = document.createElement('select')
    let op1 = document.createElement('option')
    op1.innerText= 'XS'
    let op2 = document.createElement('option')
    op2.innerText= 'S'
    let op3 = document.createElement('option')
    op3.innerText= 'M'
    let op4 = document.createElement('option')
    op4.innerText= 'L'
    let op5 = document.createElement('option')
    op5.innerText= 'XL'
    let op6 = document.createElement('option')
    op6.innerText= 'XXL'
    let div4 = document.createElement('div')
    let label2 = document.createElement('label')
    label2.innerText = 'Qty:'
    let inp = document.createElement('input')
    inp.setAttribute('type','number')
    let button = document.createElement('button')
    button.innerText = 'Add to Cart'
    console.log(userdata)
    button.addEventListener('click',function(){
        
        if(userdata==null){
            window.location.href ='./login.html'
        }else{
            iscart(elem)
            alert('Added to Cart')
        }
        
    })
    function iscart(elem){
        let obj ={
            image : elem.image,
            name :elem.name,
            brandname: elem.brandname,
            price: elem.price,
            size: drop1.value,
            qty: inp.value
        }
        addedcart.push(obj)
        
        console.log(addedcart)
        localStorage.setItem('addedcart',JSON.stringify(addedcart))

    }
    
    div3.append(img2,p4)
    drop1.append(op1,op2,op3,op4,op5,op6)
    div4.append(label2,inp,button)
    div2.append(h2,p1,hr1,p2,hr2,p3,div3,label1,drop1,div4)



    inner_container.append(div1,div2)
    container.append(inner_container)
    document.querySelector('body').append(container)
})