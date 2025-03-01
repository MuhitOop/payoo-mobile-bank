document.getElementById("add-money").addEventListener("click", (event) => {
  event.preventDefault;
  const amount = getInputValueById("amount");
  const pin = getInputValueById("pin");
  const account = document.getElementById("account-number").value;
  const mainBalance = getInnerTextById("main-balance");
  const selectedBank = document.getElementById("allbank").value;
  console.log(selectedBank);

  if (amount < 0) {
    alert("Enter the excepted amount!!");
    return;
  }

  if (account.length === 11) {
    if (pin === 1234) {
      sum = mainBalance + amount;
      setInnerTestbyIDAndValue("main-balance", sum);
      const container = document.getElementById("transection-container");
      const div = document.createElement("div");
      div.classList.add("bg-red-400", "rounde-xl");
      div.innerHTML = `
        <h1 class="text-yellow-300">Added Money from ${selectedBank}</h1>
        <h3>${amount}</h3>
        <p>account number: ${account}</p>
        
        
        `;
      container.appendChild(div);
    } else {
      console.log("Pin thik nai!");
    }
  } else {
    alert("Account Number is invalid");
  }
});
