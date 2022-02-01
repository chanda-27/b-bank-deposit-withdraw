function baperBank(button, inputValue, initialAmount, totalAmount) {
  document.getElementById(button).addEventListener('click', function () {
    const depositAmount = document.getElementById(inputValue);
    const depositAmountText = depositAmount.value;
    const newDepositAmountValue = parseFloat(depositAmountText);

    if (newDepositAmountValue > 0) {
      const totalAddAmount = document.getElementById(initialAmount);
      const totalAddAmountText = totalAddAmount.innerText;
      const totalAddAmountValue = parseFloat(totalAddAmountText);

      const balanceTotal = document.getElementById(totalAmount);
      const balanceTotalText = balanceTotal.innerText;
      const previousTotalBalance = parseFloat(balanceTotalText);

      if (button === 'deposit-button') {
        totalAddAmount.innerText = totalAddAmountValue + newDepositAmountValue;
        balanceTotal.innerText = previousTotalBalance + newDepositAmountValue;
      } else {
        if (previousTotalBalance >= newDepositAmountValue) {
          totalAddAmount.innerText = totalAddAmountValue + newDepositAmountValue;
          balanceTotal.innerText = previousTotalBalance - newDepositAmountValue;
        } else {
          alert("Insufficient Balance !")
        }
      }
      depositAmount.value = '';

    }

  })
}

baperBank('deposit-button', 'deposit-amount', 'add-amount', 'balance-total');
baperBank('widthdraw-button', 'widthdraw-amount', 'withdraw-total', 'balance-total');


