// Changing features for laptop, which have replaced the previous one
const changeFeaturesForSelectedLaptop = e => {

    // Clears featureElement for new features
    laptopFeatureElement.innerHTML = ""

    // Checking which laptop is selected
    const selectedLaptop = laptops[e.target.selectedIndex]

    // Adding laptop's image to buying section

    laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/" + selectedLaptop.image 

    // Adding laptop name to buyingSection
    laptopNameElement.innerText = selectedLaptop.title

    // Adding laptop decription to buying section
    laptopDescriptionElement.innerText = selectedLaptop.description

    // Adding laptop price to buying section
    laptopPriceElement.innerText = selectedLaptop.price
    console.log(laptopPriceElement.innerText)

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