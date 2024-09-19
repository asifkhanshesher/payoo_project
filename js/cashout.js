document.getElementById('btn_cash_out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash Out');


    const cashOut = document.getElementById('input_cash_out').value;
    const pinNumber = document.getElementById('input_cash_Out_pin').value;
    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        const balance = document.getElementById('account_balance').innerText;
        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        const newBalance = balanceNumber - cashOutNumber;
        
        // added new Balance in UI
        document.getElementById('account_balance').innerText = newBalance;
    }
    else{
        alert('Please insert correct PIN!')
    }

})