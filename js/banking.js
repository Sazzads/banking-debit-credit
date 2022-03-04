function getInputvalue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input filed
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText); */
    const previousbalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousbalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousbalanceTotal - amount;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputvalue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }


});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputvalue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log("you cant withdraw");
    }

});
document.createElement
document.new