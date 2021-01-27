// global variable 
var addPrice = 1;
/////////////////////INCREASING///////////////////
// price increasing
function priceIncreasing(priceID, addNumber) {
    const price = document.getElementById(priceID).innerText;
    const priceNumber = parseFloat(price);
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



//////////////////////DECREASING//////////////////////
// price decreasing
function priceDecreasing(priceID, addNumber) {
    const price = document.getElementById(priceID).innerText;
    const priceNumber = parseFloat(price);
    // decrease price
    addPrice = priceNumber - (priceNumber / (addNumber + 1));
    document.getElementById(priceID).innerText = addPrice;


    // tax decreasing
    const addTax = document.getElementById('tax').innerText;
    const taxNumber = parseFloat(addTax);
    const tax = (10 * (addPrice / addNumber)) / 100;
    var taxAmount = taxNumber - tax;
    document.getElementById('tax').innerText = taxAmount.toFixed(2);


    // subtotal and total Decreasing
    function totalAmount(totalID) {
        const addTotal = document.getElementById(totalID).innerText;
        const totalNumber = parseFloat(addTotal);

        // total price
        if (totalID === 'total') {
            // add
            let decreaseTotalPrice = totalNumber - ((addPrice / addNumber));
            decreaseTotalPrice -= tax;
            document.getElementById(totalID).innerText = decreaseTotalPrice.toFixed(2);
        }

        // sub subtotal price
        else {
            var addTotalPrice = totalNumber - (addPrice / addNumber);
            document.getElementById(totalID).innerText = addTotalPrice;
        }
    }
    totalAmount('subTotal');
    totalAmount('total');
}


/////////////////////////MAIN FUNCTION////////////////////
// for plus and mins button
function addOrSub(idButton, idDevice, priceID, totalID) {
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
            priceIncreasing(priceID, addNumber, totalID);
        }
        // for minus button
        else {
            var addNumber = valueNumber - 1;
            if (addNumber >= 1) {
                document.getElementById(idDevice).value = addNumber;

                // invoking price Decreasing function
                priceDecreasing(priceID, addNumber, totalID);
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
