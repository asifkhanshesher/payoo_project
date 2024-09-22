// for cash out button
document.getElementById('btn_show_cash_out').addEventListener('click', function(){

    // show cash out button clicked
    document.getElementById('cash_out_form').classList.remove('hidden');

    // hidden add money button
    document.getElementById('add_money_form').classList.add('hidden');

})



// for add money button
document.getElementById('btn_show_add_money').addEventListener('click', function(){

    // show cash out button clicked
    document.getElementById('add_money_form').classList.remove('hidden');

    // hidden add money button
    document.getElementById('cash_out_form').classList.add('hidden');

})



