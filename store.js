




/* Store */

const n_products = 20;
var cart = [];


if (window.location.pathname.split("/").pop() == "store.html"){
	const code = 
	'<div class="product" style="border:4px solid #47476b;">'+
	'<div style="padding:2px;">'+
	'<div style="float:left;width:60%;" class="productname">Product 01</div>'+
	'<div style="text-align:right;" class="price">$12.90</div></div>'+
	'<span><img src="images/image01.jpg" alt="Product" style=""></span> <div>'+
	'<button id="knopf" onclick="add_to_cart(this);" style="width:130px;">Add to cart</button></div></div>'

	var p = document.getElementById("shop");

	for(var i=0; i<n_products; i++){
		var d = document.createElement('DIV');
		d.innerHTML = code;
		d.getElementsByClassName("price")[0].innerHTML = "$" + (Math.round(Math.random() * 10) + 1.99);
		d.getElementsByClassName("productname")[0].innerHTML = "Product " + (i+1);
		d.getElementsByTagName("img")[0].src = "images/product" + Math.floor(Math.random()*10) + ".jpg";
		p.appendChild(d);
	}
}




function add_to_cart(e){
	product_number = parseInt(e.parentElement.parentElement.getElementsByClassName("productname")[0].innerHTML.substr(8));
	product_name = e.parentElement.parentElement.getElementsByClassName("productname")[0].innerHTML;
	product_price = parseFloat(e.parentElement.parentElement.getElementsByClassName("price")[0].innerHTML.substr(1));
	
	//Add
	if (e.innerHTML == "Add to cart"){
		e.parentElement.parentElement.style.border = "4px solid rgb(255, 51, 0)";
		e.innerHTML = "Remove";
		cart[product_number] = {name:product_name, price:product_price};	
	//Remove
	}else{
		e.parentElement.parentElement.style.border = "4px solid rgb(71, 71, 107)";
		e.innerHTML = "Add to cart";
		cart[product_number] = null;
	}
}



function checkout(){
	var total = 0.0;
	var k = 0;
	var bill = '<table><tr><th>Item</th><th style="text-align:right;">Price</th></tr>';
	for (o of cart){
		if (o == undefined || o == null){continue;}
		bill += '<tr><td>' + o.name + '</td> <td style="text-align:right;">$' + o.price + '</td></tr>';
		total += o.price;
	}
	bill += '<tr> <td class="total">Total:</td> <td class="total" style="text-align:right;">$' + (total).toFixed(2) + '</td> </tr></table>';
	window.sessionStorage.setItem("bill", bill);
	window.location.href = "cart.html";
}


function payment(){
	var bill = window.sessionStorage.getItem("bill");
	var p = document.getElementById("table_section");
	var d = document.createElement('DIV');
	d.innerHTML = bill;
	p.appendChild(d);
}


