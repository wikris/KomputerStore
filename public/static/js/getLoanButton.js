// Boolean for checking, if user has loan or not
let haveLoan = false

// Get a loan -button actions
loanButtonElement.addEventListener("click", () => {

    // Changing balance amout from String to int for easier handling
    let balanceAmountInt = parseInt(document.getElementById("balanceAmount").innerText)


    // Max amout of loan user can get
    let loanMaxAmount = balanceAmountInt * 2

    // Checking if user has already loan
    if(haveLoan === true) {
        alert("You can have only one loan.")

    } else {
        const buyersLoanAmount = Number(window.prompt("How much you want to loan?"))
        
        // Checking if loan amount is too high
        if(buyersLoanAmount >  loanMaxAmount) {
            alert("You can only get a loan twice your balance.")
    
        } else {
            loanContainer.style.display = "flex"
            loanAmount.innerText = buyersLoanAmount
            haveLoan = true
            balanceAmount.innerText = (balanceAmountInt + buyersLoanAmount).toString()
            repayButtonElement.style.display = "inline"
        }
    }
 })