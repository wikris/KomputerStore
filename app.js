
const loanButtonElement = document.getElementById("loanButton")
let balanceAmount = document.getElementById("balanceAmount")
let loanContainer = document.getElementById("loanContainer")
let loanAmount = document.getElementById("loanAmount")
const workButtonElement = document.getElementById("workButton")
let payBalanceAmountElement = document.getElementById("payBalanceAmount")
let bankButtonElement = document.getElementById("depositButton")
let repayButtonElement = document.getElementById("repayButton")
const laptopsElement = document.getElementById("laptops")
const laptopFeatureElement = document.getElementById("laptopFeatures")
const laptopImageElement = document.getElementById("laptopImage")
const laptopNameElement = document.getElementById("laptopName")
const laptopDescriptionElement = document.getElementById("laptopDescription")
const laptopPriceElement = document.getElementById("laptopPrice")
const buyButtonElement = document.getElementById("buyButton")

// Boolean for checking, if user has loan or not
let haveLoan = false

// Array for fetched data
let laptops = []

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
 });

// Bank -button actions
bankButtonElement.addEventListener("click", () => {

    const payBalance = parseInt(payBalanceAmountElement.innerText)
    let currentBalance = parseInt(balanceAmount.innerText)

    if(payBalance === 0) {
        alert("You don't have money.")

    } else if(haveLoan === false) {

        const newBalance = currentBalance + payBalance
        balanceAmount.innerText = newBalance
        payBalanceAmountElement.innerText = "0"

    }else {
        const newBalanceWithLoan = currentBalance + payBalance * 0.9
        balanceAmount.innerText = newBalanceWithLoan
        
        const currentLoan = parseInt(loanAmount.innerText)
        loanAmount.innerText = currentLoan + payBalance * 0.1
        payBalanceAmountElement.innerText = "0"
    }
})

// Work -button actions
workButtonElement.addEventListener("click", () => {
    
    // Checking if the Pay balance is zero
    if(payBalanceAmountElement.innerText === "0") {
        payBalanceAmountElement.innerText = "100"

    } else {
        let payBalanceAmountInt = parseInt(payBalanceAmountElement.innerText)
        payBalanceAmountInt += 100
        payBalanceAmountElement.innerText = payBalanceAmountInt
        
    }
})

// Repay loan -button actions
repayButtonElement.addEventListener("click", () => {

    if(payBalanceAmountElement.innerText === "0") {
        alert("You don't have money.")

    } else {
        let currentPayBalance = parseInt(payBalanceAmountElement.innerText)
        let currentLoanAmount = parseInt(loanAmount.innerText)
        let currentBankBalance = parseInt(balanceAmount.innerText)
        const newLoanAmount = currentLoanAmount - currentPayBalance;

        if(newLoanAmount < 0) {
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

// Fetching data
fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops))

const addLaptopsToMenu = (laptops) => {
    laptops.forEach(laptop => addLaptopToMenu(laptop));
    
    // Array for selected laptop's features
    const selectedLaptoFeatures = []

    // Adding selected laptop's features to array
    for(let i = 0; i < laptops[0].specs.length; i++) 
    {
        selectedLaptoFeatures[i] = laptops[0].specs[i]
    }

    // Adding features to HTML
    for(let j = 0; j < selectedLaptoFeatures.length; j++) {
        laptopFeatureElement.innerText += selectedLaptoFeatures[j] + "\n"
    }

    // Adding laptop's image to buying section
    
    laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/" + laptops[0].image 

    // Adding laptop name to buyingSection
    laptopNameElement.innerText = laptops[0].title

    // Adding laptop decription to buying section
    laptopDescriptionElement.innerText = laptops[0].description

    // Adding laptop price to buying section
    laptopPriceElement.innerText = laptops[0].price
    
}

// Adding laptop to dropdown
const addLaptopToMenu = (laptop) => {

    const laptopElement = document.createElement("option")
    laptopElement.value = laptop.id;

    laptopElement.appendChild(document.createTextNode(laptop.title))
    laptopsElement.appendChild(laptopElement)

}

// Changing features for laptop, which have replaced the previous one
const changeFeaturesForSelectedLaptop = e => {

    // Clears featureElement for new features
    laptopFeatureElement.innerHTML = ""

    // Checking which laptop is selected
    const selectedLaptop = laptops[e.target.selectedIndex]

    // Adding laptop's image to buying section
    
    laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/" + selectedLaptop.image 

    if(selectedLaptop.id === 5) {
        laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/assets/images/5.png"
    }

    // Adding laptop name to buyingSection
    laptopNameElement.innerText = selectedLaptop.title

    // Adding laptop decription to buying section
    laptopDescriptionElement.innerText = selectedLaptop.description

    // Adding laptop price to buying section
    laptopPriceElement.innerText = selectedLaptop.price

    // Array for selected laptop's features
    const selectedLaptoFeatures = []

    // Adding selected laptop's features to array
    for(let i = 0; i < selectedLaptop.specs.length; i++) 
    {
        selectedLaptoFeatures[i] = selectedLaptop.specs[i]
    }

    // Adding features to HTML
    for(let j = 0; j < selectedLaptoFeatures.length; j++) {
        laptopFeatureElement.innerText += selectedLaptoFeatures[j] + "\n"
    }
    
}

// Listening if selected laptop will be changed
laptopsElement.addEventListener("change", changeFeaturesForSelectedLaptop)

// BuyButton -actions
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