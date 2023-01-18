repayButtonElement.addEventListener("click", () => {

    if(payBalanceAmountElement.innerText === "0") {
        alert("You don't have money.")

    } else {
        let currentPayBalance = parseInt(payBalanceAmountElement.innerText)
        let currentLoanAmount = parseInt(loanAmount.innerText)
        let currentBankBalance = parseInt(balanceAmount.innerText)
        const newLoanAmount = currentLoanAmount - currentPayBalance;

        // Checking if payment is bigger than sum of loan and adds rest to account
        if(newLoanAmount <= 0) {
            loanAmount.innerText = "0"
            const newBankBalanceAmount = currentBankBalance + newLoanAmount * - 1
            balanceAmount.innerText = newBankBalanceAmount
            haveLoan = false

        } else {
            loanAmount.innerText = newLoanAmount

        }
        payBalanceAmountElement.innerText = "0"

    }
})