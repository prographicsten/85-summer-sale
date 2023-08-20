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
    }

    // =================================================================

    // step 8
    const totalAmountBtn = document.getElementById('total_amount_btn').innerText = currentTotalPrice;
};



