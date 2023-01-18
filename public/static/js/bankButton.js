// Bank -button actions
bankButtonElement.addEventListener("click", () => {

    // Changing the strings to int for counting
    const payBalance = parseInt(payBalanceAmountElement.innerText)
    let currentBalance = parseInt(balanceAmount.innerText)

    // Checking if user has money to transfer money
    if(payBalance === 0) {
        alert("You don't have money.")

    // Checking if user has a loan and adding funds to a count
    } else if(haveLoan === false) {

        const newBalance = currentBalance + payBalance
        balanceAmount.innerText = newBalance
        payBalanceAmountElement.innerText = "0"

    // If user has a loan 90% to account and 10% off the loan
    }else {
        const newBalanceWithLoan = currentBalance + payBalance * 0.9
        balanceAmount.innerText = newBalanceWithLoan
        
        const currentLoan = parseInt(loanAmount.innerText)
        loanAmount.innerText = currentLoan + payBalance * 0.1
        payBalanceAmountElement.innerText = "0"
    }
})