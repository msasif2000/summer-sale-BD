var totalPrice = 0;

//onclick functions
function addItemToCart1() {
  const priceText = document.getElementById('price1').innerText;
  const price = parseFloat(priceText);

  //console.log(price);
  setTotalPrice(price);
  entryToCart('K. Accessories');
}
function addItemToCart2() {
  const priceText = document.getElementById('price2').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('H. Accessories');

}
function addItemToCart3() {
  const priceText = document.getElementById('price3').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('Home Cooker');

}
function addItemToCart4() {
  const priceText = document.getElementById('price4').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('Sports Back Cap');

}
function addItemToCart5() {
  const priceText = document.getElementById('price5').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('Full Jersey Set');

}
function addItemToCart6() {
  const priceText = document.getElementById('price6').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('Sports cates');

}
function addItemToCart7() {
  const priceText = document.getElementById('price7').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('Single Relax Chair');

}
function addItemToCart8() {
  const priceText = document.getElementById('price8').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('Children play');

}
function addItemToCart9() {
  const priceText = document.getElementById('price9').innerText;
  const price = parseFloat(priceText);

  setTotalPrice(price);
  entryToCart('Flexible Sofa');

}




var discount = 0;
function setTotalPrice(price) {
  totalPrice = totalPrice + price;
  if (totalPrice > 0) {
    document.getElementById('purchase').removeAttribute('disabled');
  }
  document.getElementById('total-price').innerText = totalPrice.toFixed(2);
  
  if (totalPrice >= 200) {
    document.getElementById('apply').removeAttribute('disabled');
  }
    document.getElementById('apply').addEventListener('click', applyCoupon);

    function applyCoupon() {
      const couponCode = "SELL200";
      const coupon = getInputCoupon(couponCode);
      if (coupon == true) {
        discount = totalPrice * 0.2;
        document.getElementById('discount').innerText = discount.toFixed(2);
       const total = totalPrice - discount;
        document.getElementById('total').innerText = total.toFixed(2);

      }
      else {
        alert('Invalid Coupon');
      }
    }

  const total = totalPrice - discount;
  document.getElementById('total').innerText = total.toFixed(2);
}


//Get Input Coupon code
function getInputCoupon(code) {
  const couponInput = document.getElementById('coupon');
  const couponText = couponInput.value;
  if (couponText == code) {
    // couponInput.value = '';
    return true;
  }
  else {
    return false;
  }
}


//Entry Product Name to Cart  
function entryToCart(product) {
  const productName = document.getElementById('entryToCart');
  const count = productName.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-4');
  p.classList.add('font-bold');
  p.innerHTML = `${count + 1}. ${product}`;
  productName.appendChild(p);
}

document.getElementById('home').addEventListener('click', function () {
  window.location.href='index.html';
})