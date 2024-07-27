const btncart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnclose=document.querySelector('#cart-close');
btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
})

btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
})

document.addEventListener('DOMContentLoaded',loadfood);
function loadfood()
{
    console.log('calling');
    loadcontent();
}
function loadcontent(){
    //remove food items
    let btnRemove=document.querySelectorAll('.cart-remove')
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem)
    });

//product item change
    let qtyElements=document.querySelectorAll('.cart-quantity')
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });


//Product cart
let cartBtns=document.querySelectorAll('.add-cart');
cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
})
   
    updateTotal();

}

function removeItem(){
    if(confirm('Are you confirm to remove this item'))
    this.parentElement.remove();
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    loadcontent();
}

//change qty
function changeQty(){
    if(isNaN(this.value)||this.value<1){
        this.value=1;
    }
    loadcontent();
}

let itemList=[];

//addCart
function addCart(){
    let food=this.parentElement;
    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.food-price').innerHTML;
    let imgsrc=food.querySelector('.food-img').src;
    //console.log(title,price,imgsrc);

    let newProduct={title,price,imgsrc};

    //check product already exist in cart
    if(itemList.find((el)=>el.title==newProduct.title))
        {
            alert("product Already added in cart");
            return;
        }
        else{
            itemList.push(newProduct);
        }

    let newProductElement=createCartProduct(title,price,imgsrc);
    let element=document.createElement('div');
    element.innerHTML=newProductElement;
    let cartBasket=document.querySelector('.cart-content');
    cartBasket.append(element);
    loadcontent();
}
function createCartProduct(title,price,imgsrc){
    return `
    <div class="cart-box">
  <img src="${imgsrc}" class="cart-img" alt="ha">
  <div class="detail-box">
      <div class="cart-food-title">${title}</div>
      <div class="price-box">
          <div class="cart-price">${price}</div>
          <div class="cart-amt">${price}</div>
      </div>
      <input type="number" value="1"  class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
`
}

function updateTotal()
{
    const cartItems=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');

    let total=0;

    cartItems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace('Rs:',''));
        let qty=product.querySelector('.cart-quantity').value;
        total=total+(price*qty);
        product.querySelector('.cart-amt').innerText="Rs.:"+(price*qty);
    });
    totalValue.innerHTML='Rs : '+total; 
}
function order(){
    alert('Order Placed ');  
}