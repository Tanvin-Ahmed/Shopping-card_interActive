// global variable 
var addPrice = 1;
/////////////////////INCREASING///////////////////
// price increasing
function priceIncreasing(priceID, addNumber) {
    const price = document.getElementById(priceID).innerText;
    const priceNumber = parseFloat(price);
    // when device selected more than 1
    if (addNumber > 1) {
        // add price
        addPrice = (priceNumber / (addNumber - 1)) * addNumber;
        document.getElementById(priceID).innerText = addPrice;


        // tax increasing
        const addTax = document.getElementById('tax').innerText;
        const taxNumber = parseFloat(addTax);
        const tax = (10 * (addPrice / addNumber)) / 100;
        var taxAmount = taxNumber + tax;
        document.getElementById('tax').innerText = taxAmount.toFixed(2);


        // subtotal and total and tax Increasing
        function totalAmount(totalID) {
            const addTotal = document.getElementById(totalID).innerText;
            const totalNumber = parseFloat(addTotal);

            // add total price
            if (totalID === 'total') {
                // add
                var addTotalPrice = totalNumber + tax + (addPrice / addNumber);
                console.log(addTotalPrice, tax, (addPrice / addNumber), totalNumber);
                document.getElementById(totalID).innerText = addTotalPrice.toFixed(2);
            }

            // add subtotal price
            else {
                var addTotalPrice = totalNumber + (addPrice / addNumber);
                document.getElementById(totalID).innerText = addTotalPrice;
            }
        }
        totalAmount('subTotal');
        totalAmount('total');
    }
    // when device select only 1
    else if (addNumber == 1) {
        if (priceID == 'iphonePrice') {
            // price
            document.getElementById(priceID).innerText = 1219;
            // tax
            const tax = (10 * 1219) / 100;
            document.getElementById('tax').innerText = tax.toFixed(2);
            // subTotal
            document.getElementById('subTotal').innerText = 1219;
            // total
            document.getElementById('total').innerText = 1219 + tax;
        }
        else {
            // for case
            document.getElementById(priceID).innerText = 59;
            // tax
            const Tax = (10 * 59) / 100;
            document.getElementById('tax').innerText = Tax.toFixed(2);
            // subTotal
            document.getElementById('subTotal').innerText = 59;
            // total
            document.getElementById('total').innerText = 59 + Tax;
        }
    }
}


//////////////////////DECREASING//////////////////////
// price decreasing
function priceDecreasing(priceID, addNumber) {
    const price = document.getElementById(priceID).innerText;
    const priceNumber = parseFloat(price);
    // when minimum 1 device selected 
    if (addNumber >= 1) {
        // decrease price
        addPrice = priceNumber - (priceNumber / (addNumber + 1));
        document.getElementById(priceID).innerText = addPrice;
        // tax decreasing
        const totalTax = document.getElementById('tax').innerText;
        const taxNumber = parseFloat(totalTax);
        const tax = (10 * (addPrice / addNumber)) / 100;
        var taxAmount = taxNumber - tax;
        document.getElementById('tax').innerText = taxAmount.toFixed(2);


        // subtotal and total Decreasing
        function totalAmount(totalID) {
            const total = document.getElementById(totalID).innerText;
            const totalNumber = parseFloat(total);
            // total price
            if (totalID === 'total') {
                // add
                let decreaseTotalPrice = totalNumber - ((addPrice / addNumber));
                decreaseTotalPrice -= tax;
                document.getElementById(totalID).innerText = decreaseTotalPrice.toFixed(2);
            }
            // sub subtotal price
            else {
                const decreasingTotalPrice = totalNumber - (addPrice / addNumber);
                document.getElementById(totalID).innerText = decreasingTotalPrice;
            }
        }
        totalAmount('subTotal');
        totalAmount('total');
    }
    // when selected device is 0
    else if (addNumber == 0) {
        // for phone
        if (priceID == 'iphonePrice') {
            document.getElementById(priceID).innerText = 0;
            // tax
            document.getElementById('tax').innerText = 0;
            // subTotal
            document.getElementById('subTotal').innerText = 0;
            // total
            document.getElementById('total').innerText = 0;
        }
        else {
            // for case
            document.getElementById(priceID).innerText = 0;
            // tax
            document.getElementById('tax').innerText = 0;
            // subTotal
            document.getElementById('subTotal').innerText = 0;
            // total
            document.getElementById('total').innerText = 0;
        }
    }
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
            priceIncreasing(priceID, addNumber);
        }
        // for minus button
        else {
            var addNumber = valueNumber - 1;
            if (addNumber >= 0) {
                document.getElementById(idDevice).value = addNumber;

                // invoking price Decreasing function
                priceDecreasing(priceID, addNumber);
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
