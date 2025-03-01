document.getElementById('cash-out-btn').addEventListener('click', (event) => {
    event.preventDefault()
    const pin = document.getElementById("cashOut-pin").value
    const convertedPin = parseInt(pin)
    const cashOutAmount = document.getElementById("cashOut-amount").value
    const convertedAmount = parseFloat(cashOutAmount)
    const mainBalance = document.getElementById('main-balance').innerText
    const convertedMainBalance = parseFloat(mainBalance)
    if (convertedPin ===1234) {
        sum = convertedMainBalance - convertedAmount
        document.getElementById("main-balance").innerText = sum;
    } else {
        alert('Enter a valid PIN!!')
    }    

})