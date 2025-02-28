document.getElementById('add-money-box').addEventListener('click', () => {
    document.getElementById('add-money-form').style.display = 'block'
    document.getElementById("cash-out-form").style.display = 'none'
})


document.getElementById('cashOut-box').addEventListener("click", () => {
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("cash-out-form").style.display = "block";
});

