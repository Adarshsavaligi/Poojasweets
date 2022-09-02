console.log("this is our project")



let addbtn = document.getElementById('addtocart');

addbtn.addEventListener("click" , function(e){
    let productname = document.getElementById("productname");
    let productprice = document.getElementById("productprice");
    let productqty = document.getElementById("productqty");
    let cartitems = localStorage.getItem("cartitems");
    if ( cartitems == null){
        cartObj =[];
    }
    else{
        cartObj = JSON.parse(cartitems);
    }
    cartObj.push(productname.innerText,productprice.innerText,productqty.value);
    localStorage.setItem("cartitems",JSON.stringify(cartObj));
    productname.value = "";
    productprice.value = "";
    productqty.value = "";
    console.log(cartObj);
    showitems();
});

function showitems(){
    let cartitems = localStorage.getItem("cartitems");
    if(cartitems == null){
        cartObj = JSON.parse(cartitems);
    }
    let html = "";
    cartObj.forEach(function(element,index) {
        html +=`
      hi`;
        
    });
    let elem = document.getElementById("cartitems");
    if (cartObj.length != 0) {
        elem.innerHTML = html;
    }
    else{
        elem.innerHTML = 'Nothing to show ! " Add to cart';
    }
}