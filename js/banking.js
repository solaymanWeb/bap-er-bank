
//Handel deposit button event

document.getElementById('diposit-button').addEventListener('click', function(){
    // input box 
    const depositInputBox = document.getElementById('deposit-input-box');
    const newDepositInput = depositInputBox.value;
   //deposit output box
    const depositAmountText = document.getElementById('current-deposit-amount');

    // update deposit total
    const previusAmount = depositAmountText.innerText
    depositAmountText.innerText = newDepositInput;
    const totalAmount = parseFloat(previusAmount) + parseFloat(newDepositInput);
    depositAmountText.innerText= totalAmount;

    //update account balance

    const balanceField = document.getElementById('balance-field')
    balanceFieldText = balanceField.innerText;
    totalBalance = parseFloat(balanceFieldText) + parseFloat(newDepositInput)
    balanceField.innerText = totalBalance;

    //clear the deposit input field
    depositInputBox.value = '';
  
})

//withdraw button event handelar
 document.getElementById('withdraw-button').addEventListener('click',function(){

    //withdraw input 
    const withdrawInput = document.getElementById('withdraw-input')
    const newWithdrawInput = withdrawInput.value;
    
// previuos withdraw balance 
    const withdrawField = document.getElementById('withdrow-field');
    const previousAmount = withdrawField.innerText;
    const totalWithdrowAmount = parseFloat(previousAmount) + parseFloat(newWithdrawInput);
    withdrawField.innerText= totalWithdrowAmount;

    //update balance
    const balanceFieldTotal = document.getElementById('balance-field');
    const preBalanceTotal = balanceFieldTotal.innerText;

    const newBalanceTotal =  parseFloat(preBalanceTotal)- parseFloat(newWithdrawInput)
    balanceFieldTotal.innerText = newBalanceTotal;

   





    //clear withdrow field
    withdrawInput.value= '';


 })
