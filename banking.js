document.getElementById('deposit-button').addEventListener('click', function () {
  const depositPassword = document.getElementById('deposit-amount');
  const depositAmountText = depositPassword.value;
  const depositAmount = parseFloat(depositAmountText);
  const depositTotal = document.getElementById('add-amount');
  const previousAmountText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousAmountText);
  const newDepositTotalAmount = previousDepositAmount + depositAmount;
  depositTotal.innerText = newDepositTotalAmount;

  const depositBalance = document.getElementById('balance-total');
  const depositbalnceText = depositBalance.innerText;
  const previousDepositBlance = parseFloat(depositbalnceText);
  const newDepositTotalBalance = previousDepositBlance + depositAmount;
  depositBalance.innerText = newDepositTotalBalance;

  depositPassword.value = '';
});

document.getElementById('widthdraw-button').addEventListener('click', function () {
  const withdrawAmount = document.getElementById('widthdraw-amount');
  const withdrawText = withdrawAmount.value;
  const withdrawNumber = parseFloat(withdrawText);
  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawTotalText = withdrawTotal.innerText;
  const withdrawTotalNumber = parseFloat(withdrawTotalText);

  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalNumber = parseFloat(balanceTotalText);
  if (withdrawNumber > balanceTotalNumber) {
    alert("Insufficiant balance!")
  } else {
    const newWithdrawTotal = withdrawTotalNumber + withdrawNumber;
    withdrawTotal.innerText = newWithdrawTotal;
    const balanceSubstract = balanceTotalNumber - withdrawNumber;
    balanceTotal.innerText = balanceSubstract;
  }
  withdrawAmount.value = '';
})

