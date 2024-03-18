import { addQuoteFromContainer } from "./funtion.js";      
const apiURL = "https://fakestoreapi.com/products";
let apiData = [];

// fetch data from link
fetch(apiURL)
.then(response=>{
    return response.json();
})
.then(response=>{
    apiData = response;
    let datalength = apiData.length;
    for(let i = 0; i < datalength; i++){
        addQuoteFromContainer(apiData[i].id,apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
    }
})



// Sorting Section

function displaySortedProducts(sortedProducts) {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    sortedProducts.forEach(product => {
        addQuoteFromContainer(product.id, product.title, product.image, product.price, product.description, product.category, product.rating.rate, product.rating.count);
    });
}

document.getElementById("sort").addEventListener("change", function() {
    const sortBy = this.value;
    let sortProducts = [...apiData];

    if (sortBy === "price") {
        sortProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "ascend") {
        sortProducts.sort((a, b) => a.id - b.id);
    } else if (sortBy === "descend") {
        sortProducts.sort((a, b) => b.id - a.id);
    }

    displaySortedProducts(sortProducts);
});





// Filter Section
function displayFilteredProducts(filteredProducts) {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    filteredProducts.forEach(product => {
        addQuoteFromContainer(product.id, product.title, product.image, product.price, product.description, product.category, product.rating.rate, product.rating.count);
    });
}

function filterProducts(category) {
    const filteredCategory = getCategoryKey(category); // Convert category to match with the API categories
    const filteredProducts = apiData.filter(product => product.category === filteredCategory);
    displayFilteredProducts(filteredProducts);
}

function getCategoryKey(category) {
    switch (category) {
        case "Men's Wear":
            return "men's clothing";
        case "Women's Wear":
            return "women's clothing";
        case "Accessories":
            return "jewelery";
        case "Electronics":
            return "electronics";
        default:
            return category;
    }
}

document.getElementById("filter").addEventListener("change", function() {
    const filterBy = this.value;
    filterProducts(filterBy);
});

document.querySelector("button").addEventListener("click", function() {
    document.getElementById("sort").selectedIndex = 0;
    document.getElementById("filter").selectedIndex = 0;
    displayProducts(products);
});

