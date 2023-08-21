// card onclick function

let total = 0;

function cardOnClick(productInfo) {
    const productInformation = productInfo.childNodes[5].innerText;
    const addProductList = document.getElementById('product_info');

    const count = addProductList.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-3');
    p.classList.add('text-[#111]');
    p.classList.add('font-medium');
    p.innerHTML = `${count + 1}. ${productInformation}`;
    addProductList.appendChild(p);
    

    const productPrice = productInfo.childNodes[7].childNodes[0].innerText;
    const productPriceString = parseFloat(productPrice);
    
    total = total + productPriceString;
    const purchaseBtn = document.getElementById('purchase_btn');
    if (total <= 0) {
        purchaseBtn.setAttribute('disabled', true);
    }
    else if (total > 0) {
        purchaseBtn.removeAttribute('disabled');
    }
    
    const currentTotalPrice = document.getElementById('total_price').innerText = total.toFixed(2);

    // =================================================================
    const applyBtn = document.getElementById('apply_btn');
    if (total <= 199) {
        applyBtn.setAttribute('disabled', true);
    }
    else if (total >= 200 ) {
        applyBtn.removeAttribute('disabled');
        const useCuponCode = document.getElementById('use_cupon_code').innerText;
        const cuponAutoFill = document.getElementById('cupon_code').value = useCuponCode;
        console.log(cuponAutoFill);

    }

    // =================================================================

    const totalAmountBtn = document.getElementById('total_amount_btn').innerText = currentTotalPrice;
};

// Apply btn click function
document.getElementById('apply_btn').addEventListener('click', function () {
    const cuponCode = document.getElementById('cupon_code').value;

    if (cuponCode === 'SELL200') {
        const totalPriceOff = document.getElementById('total_price').innerText;
        const totalPriceOffString = parseFloat(totalPriceOff);
        const discountOff = (totalPriceOffString / 100) * 20;
        const discountOffToFixed = discountOff.toFixed(2);

        const payNow = totalPriceOffString - discountOff;

        const discountCount = document.getElementById('discount_count').innerText = discountOffToFixed;
        const discountCountString = parseFloat(discountCount);
        const discountCountToFixed = discountCountString.toFixed(2);
        

        const payNeeded = document.getElementById('total_amount_btn').innerText = payNow.toFixed(2);
    }
    else {
        alert('Cupon Code does not match');
        return;
    }
});