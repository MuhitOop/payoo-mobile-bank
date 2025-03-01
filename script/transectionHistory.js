document.getElementById("transection-box").addEventListener('click', () => {
    handleToggol("add-money-form", 'none');
    handleToggol("cash-out-form", 'none');
    handleToggol("transection-history", 'block');
})