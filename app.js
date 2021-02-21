//////////////////////////// first class ticket booking///////////////////////////////////


function handleFirstTicket(isIncrease) {
    const firstGivenInput = document.getElementById("first-input");
    const newfirstGivenInput = parseInt(firstGivenInput.value);

    let firstNewInput = newfirstGivenInput;
    if (isIncrease == true) {
        firstNewInput = newfirstGivenInput + 1;
    }

    if (isIncrease == false && newfirstGivenInput > 0) {
        firstNewInput = newfirstGivenInput - 1;
    }

    firstGivenInput.value = firstNewInput;

    const firstCost = firstNewInput * 150;
    document.getElementById("sub-total").innerText = "$" + firstCost;
}
document.getElementById("first-ticket-increase").addEventListener("click", function() {
    handleFirstTicket(true);
    subTotalCost();


});

document.getElementById("first-ticket-decrease").addEventListener("click", function() {
    handleFirstTicket(false);
    subTotalCost();


})




/////////////////////////////////////  second class ticket booking   ////////////////////////////////////

function handleSecondTicket(isIncrease) {

    const secondGivenInput = document.getElementById("second-input");
    const newSecondGivenInput = parseInt(secondGivenInput.value);
    // const secondNewInput = newSecondGivenInput + 1;
    let secondNewInput = newSecondGivenInput;
    if (isIncrease == true) {
        secondNewInput = newSecondGivenInput + 1;
    }

    if (isIncrease == false && newSecondGivenInput > 0) {
        secondNewInput = newSecondGivenInput - 1;
    }

    secondGivenInput.value = secondNewInput;

    const secondCost = secondNewInput * 100;
    document.getElementById("sub-total").innerText = "$" + secondCost;
}


document.getElementById("second-ticket-increase").addEventListener("click", function() {


    handleSecondTicket(true);
    subTotalCost();



});

document.getElementById("second-ticket-decrease").addEventListener("click", function() {


    handleSecondTicket(false);
    subTotalCost();






});

/////////////////////////////////////// grand total with su-total and vat  /////////////////////////////////////////


function subTotalCost() {

    const firstGivenInput = document.getElementById("first-input");
    const firstNewInput = parseInt(firstGivenInput.value);

    const secondGivenInput = document.getElementById("second-input");
    const secondNewInput = parseInt(secondGivenInput.value);

    const subTotalCost = firstNewInput * 150 + secondNewInput * 100;
    document.getElementById("sub-total").innerText = "$" + subTotalCost;

    const vat = Math.round(subTotalCost * 0.1);

    document.getElementById("vat-value").innerText = "$" + vat;

    const grandTotal = subTotalCost + vat;
    document.getElementById("grand-total").innerText = "$" + grandTotal;








}