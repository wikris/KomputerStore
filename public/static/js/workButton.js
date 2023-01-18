workButtonElement.addEventListener("click", () => {
    
    // Checking if the Pay balance is zero
    if(payBalanceAmountElement.innerText === "0") {
        payBalanceAmountElement.innerText = "100"
    
    // Adding funds to pay balance
    } else {
        let payBalanceAmountInt = parseInt(payBalanceAmountElement.innerText)
        payBalanceAmountInt += 100
        payBalanceAmountElement.innerText = payBalanceAmountInt
        
    }
})