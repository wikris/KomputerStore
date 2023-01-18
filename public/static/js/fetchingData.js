let laptops = []

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