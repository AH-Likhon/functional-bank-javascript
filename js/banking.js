document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;
    // console.log(depositAmount);

    //update deposit amount
    const addDeposit = document.getElementById('add-deposit');
    const previousDepositAmount = addDeposit.innerText;
    const newdepositTotal = parseFloat(previousDepositAmount) + parseFloat(newdepositAmount);
    addDeposit.innerText = newdepositTotal;

    //update current balance
    const currentTotalBalance = document.getElementById('total-balance');
    const previousBalance = currentTotalBalance.innerText;
    const newCurrentBalance = parseFloat(previousBalance) + parseFloat(newdepositAmount);
    currentTotalBalance.innerText = newCurrentBalance;

    depositInput.value = '';
})

// withdraw handle
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    //update withdraw amount
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawAmount = totalWithdraw.innerText;
    const newWithdrawAmountTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    totalWithdraw.innerText = newWithdrawAmountTotal;

    //update current balance
    const currentTotalBalance = document.getElementById('total-balance');
    const previousBalance = currentTotalBalance.innerText;
    const newCurrentBalance = parseFloat(previousBalance) - parseFloat(newWithdrawAmount);
    currentTotalBalance.innerText = newCurrentBalance;

    //clear withdrwa input
    withdrawInput.value = '';
});