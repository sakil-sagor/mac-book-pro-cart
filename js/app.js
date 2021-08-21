// memory-storage-delivery button clicked function

function partsPrice(idName, value) {
    let price = document.getElementById(idName);
    price.innerText = value;
    totalPrice();
}

// all price sum function 

function totalPrice() {
    let allPrice = document.querySelectorAll('.all-price');
    let result = 0;
    for (let subPrice of allPrice) {
        let element = parseFloat(subPrice.innerText);
        result = element + result;
    }
    document.getElementById('total-price').innerText = result;
    document.getElementById('total').innerText = result;
}

// promo code function 

function promoCode() {
    let promoInput = document.getElementById('promo-input');
    let total = document.getElementById('total');
    let totalValue = parseFloat(document.getElementById('total-price').innerText);
    if (promoInput.value == "stevekaku") {
        total.innerText = (totalValue * 80) / 100;
        promoInput.value = '';
    } else {
        promoInput.value = '';
    }
}

// memory price  variation
document.getElementById('memory-8gb').addEventListener('click', function () {
    partsPrice('memory-price', 0)
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    partsPrice('memory-price', 180)
})

// storage price variation 
document.getElementById('storage-256gb').addEventListener('click', function () {
    partsPrice('storage-price', 0)
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    partsPrice('storage-price', 100)
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    partsPrice('storage-price', 180)
})

// delivery price variation 
document.getElementById('regular-delivery').addEventListener('click', function () {
    partsPrice('delivery-price', 0)
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    partsPrice('delivery-price', 20)
})



