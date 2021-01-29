// ////////////////INCREASE FUNCTION//////////////////////
function priceIncreasing(priceID) {
    let price;
    if (priceID == 'iphonePrice') {
        price = 1219;
    } else {
        price = 59;
    }
    let addPrice = 0,taxAmount = 0;
    const catchPrice = document.getElementById(priceID).innerText;
    const catchPriceNumber = parseFloat(catchPrice);
    addPrice = catchPriceNumber + price;
    document.getElementById(priceID).innerText = addPrice;
    // tax increasing
    const addTax = document.getElementById('tax').innerText;
    const taxNumber = parseFloat(addTax);
    const tax = (10 * price) / 100;
    taxAmount = taxNumber + tax;
    document.getElementById('tax').innerText = taxAmount.toFixed(2);

    // subtotal and total and tax Increasing
    function totalAmount(totalID) {
        const addTotal = document.getElementById(totalID).innerText;
        const totalNumber = parseFloat(addTotal);

        // add total price
        if (totalID === 'total') {
            // add
            const addTotalPrice = totalNumber + tax + price;
            document.getElementById(totalID).innerText = addTotalPrice.toFixed(2);
        }

        // add subtotal price
        else {
            const addSubTotalPrice = totalNumber + price;
            document.getElementById(totalID).innerText = addSubTotalPrice;
        }
    }
    totalAmount('subTotal');
    totalAmount('total');
}


// /////////////////////DECREASE FUNCTION//////////////////
function priceDecreasing(priceID) {
    let price;
    if (priceID == 'iphonePrice') {
        price = 1219;
    } else {
        price = 59;
    }
    let decreasePrice = 0, taxAmount = 0;
    const catchPrice = document.getElementById(priceID).innerText;
    const catchPriceNumber = parseFloat(catchPrice);
    decreasePrice = catchPriceNumber - price;
    document.getElementById(priceID).innerText = decreasePrice;
    // tax increasing
    const catchTax = document.getElementById('tax').innerText;
    const taxNumber = parseFloat(catchTax);
    const tax = (10 * price) / 100;
    taxAmount = taxNumber - tax;
    document.getElementById('tax').innerText = taxAmount.toFixed(2);

    function totalAmount(totalID) {
        const catchTotal = document.getElementById(totalID).innerText;
        const totalNumber = parseFloat(catchTotal);

        // add total price
        if (totalID === 'total') {
            // add
            const decreaseTotalPrice = totalNumber - tax - price;
            document.getElementById(totalID).innerText = decreaseTotalPrice.toFixed(2);
        }

        // add subtotal price
        else {
            const decreaseSubTotalPrice = totalNumber - price;
            document.getElementById(totalID).innerText = decreaseSubTotalPrice;
        }
    }
    totalAmount('subTotal');
    totalAmount('total');
}


/////////////////////////MAIN FUNCTION////////////////////
// for plus and mins button
function addOrSub(idButton, idDevice, priceID) {
    // catch buttons
    const button = document.getElementById(idButton);
    button.addEventListener('click', function () {
        const value = document.getElementById(idDevice).value;
        const valueNumber = parseFloat(value);
        // for plus button
        if ((idButton === 'plusBtn1' && idDevice === 'iphone') || (idButton == 'plusBtn2' && idDevice === 'case')) {
            var addNumber = valueNumber + 1;
            document.getElementById(idDevice).value = addNumber;

            // invoking price Increasing function
            priceIncreasing(priceID);
        }
        // for minus button
        else {
            var addNumber = valueNumber - 1;
            if (addNumber >= 0) {
                document.getElementById(idDevice).value = addNumber;

                // invoking price Decreasing function
                priceDecreasing(priceID);
            }
        }
    })
}

// ///////////////////INVOKING MAIN FUNCTION/////////////////////
// parameters are buttonId, deviceId, PriceId, totalID
addOrSub('plusBtn1', 'iphone', 'iphonePrice');

addOrSub('minusBtn1', 'iphone', 'iphonePrice');

addOrSub('plusBtn2', 'case', 'casePrice');

addOrSub('minusBtn2', 'case', 'casePrice');
