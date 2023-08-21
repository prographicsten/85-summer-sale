// card onclick function

// step 1
let total = 0;

function cardOnClick(productInfo) {
    // step 2
    const productInformation = productInfo.childNodes[5].innerText;
    // console.log(productInformation);

    // step 3
    const addProductList = document.getElementById('product_info');

    // step 4
    // child count by childElementCount property
    const count = addProductList.childElementCount;

    // step 5
    const p = document.createElement('p');
    p.classList.add('my-3');
    p.classList.add('text-[#111]');
    p.classList.add('font-medium');
    p.innerHTML = `${count + 1}. ${productInformation}`;
    addProductList.appendChild(p);

    // step 6
    const productPrice = productInfo.childNodes[7].childNodes[0].innerText;
    const productPriceString = parseFloat(productPrice);
    // console.log(productPriceString);
    
    total = total + productPriceString;
    // console.log(total);
    const purchaseBtn = document.getElementById('purchase_btn');
    if (total <= 0) {
        purchaseBtn.setAttribute('disabled', true);
    }
    else if (total > 0) {
        purchaseBtn.removeAttribute('disabled');
    }
    
    // step 7
    const currentTotalPrice = document.getElementById('total_price').innerText = total.toFixed(2);

    // =================================================================
    const applyBtn = document.getElementById('apply_btn');
    if (total <= 199) {
        applyBtn.setAttribute('disabled', true);
    }
    else if (total >= 200 ) {
        applyBtn.removeAttribute('disabled');
        const useCuponCode = document.getElementById('use_cupon_code').innerText;
        // console.log(useCuponCode);
        const cuponAutoFill = document.getElementById('cupon_code').value = useCuponCode;
        console.log(cuponAutoFill);

    }

    // =================================================================

    // step 8
    const totalAmountBtn = document.getElementById('total_amount_btn').innerText = currentTotalPrice;
};

// Apply btn click function
document.getElementById('apply_btn').addEventListener('click', function (applyCuponCode) {
    // console.log('apply btn click function called');
    const cuponCode = document.getElementById('cupon_code').value;
    // console.log(cuponCode);
    if (cuponCode === 'SELL200') {
        // console.log('apply cupon code');
        const totalPriceOff = document.getElementById('total_price').innerText;
        const totalPriceOffString = parseFloat(totalPriceOff);
        // console.log(typeof totalPriceOffString);
        const discountOff = (totalPriceOffString / 100) * 20;
        const discountOffToFixed = discountOff.toFixed(2);
        // console.log(discountOffToFixed);

        const payNow = totalPriceOffString - discountOff;
        // console.log(payNow);

        const discountCount = document.getElementById('discount_count').innerText = discountOffToFixed;
        const discountCountString = parseFloat(discountCount);
        const discountCountToFixed = discountCountString.toFixed(2);
        // console.log(discountCountToFixed);
        

        const payNeeded = document.getElementById('total_amount_btn').innerText = payNow.toFixed(2);
        // console.log(payNeeded);
        
    }
    else {
        alert('Cupon Code does not match');
        return;
    }
});