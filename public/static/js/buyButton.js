buyButtonElement.addEventListener("click", () => {

    let balanceAmountInt = parseInt(balanceAmount.innerText)
    const currentPrice = parseInt(laptopPriceElement.innerText)
    
   if(balanceAmountInt < currentPrice) {
        alert("You don't have enough money to buy the laptop.")

   } else {
    let newCountBalance = balanceAmountInt - currentPrice
    balanceAmount.innerText = newCountBalance
    alert("Congratulations! Have fun with your new laptop!")
   }
}) 