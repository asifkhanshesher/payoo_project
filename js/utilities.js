function showSectionById(id){

    // for hidden
    document.getElementById('add_money_form').classList.add('hidden');
    document.getElementById('cash_out_form').classList.add('hidden');
    document.getElementById('add_transaction').classList.add('hidden');

    // for show 
    document.getElementById(id).classList.remove('hidden');
}