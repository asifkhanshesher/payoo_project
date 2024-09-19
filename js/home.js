document.getElementById('add_Money_Btn').addEventListener('click', function(event){
    event.preventDefault();
    

    const addAmount = document.getElementById('input_add_amount').value;
    const pinNumberInput = document.getElementById('input_pin').value;
    console.log(addAmount, pinNumberInput);
    
    if(pinNumberInput === '1234'){
        console.log('Add Money Sucessfull.')

        // get current balance
        const balance = document.getElementById('account_balance').innerText;
        console.log(balance)

        // add addAmount with balance
        const addAmountInput = parseFloat(addAmount);
        const addBalance = parseFloat(balance);
        const newBalance = addAmountInput + addBalance

        console.log(newBalance)

        //update the balance in UI
        document.getElementById('account_balance').innerText = newBalance;
    }



    else{
        alert('Please Insert Correct Pin!')
    }

})