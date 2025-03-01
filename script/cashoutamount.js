document.getElementById("cash-out-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const accountNumber = document.getElementById("cashOutAcNum").value;
  const pin = getInputValueById("cashOut-pin");
  const amount = getInputValueById("cashOut-amount");
    const mainBalance = getInnerTextById("main-balance");
    

    if (amount > mainBalance) {
        alert("Insufficient Balance!");
        return;
    }

  if (accountNumber.length === 11) {
    if (pin === 1234) {
      const sum = mainBalance - amount;
      setInnerTestbyIDAndValue("main-balance", sum);

      const container = document.getElementById("transection-container");
      const p = document.createElement("p");
      p.innerText = `
            Cash out  ${amount}  from  ${accountNumber}  account
            `;
        container.appendChild(p);
    } else {
      alert("pin Not Valid!");
    }
  } else {
    alert("Account Number Not Valid!");
  }
});
