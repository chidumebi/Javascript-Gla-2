function addQuoteFromContainer(id,title,imageURL,price,description,category,rate,count){
    document.getElementById("content").innerHTML +=
        `<div class="main">
            <h2>${id}</h2>
            <h3>${title}</h3>  
            <img src=${imageURL} width="100px">
            <p class="price">${price}</p>
            <p class="desc">${description}</p>

            <p class="category">${category}</p>
            <p class="rate">${rate}</p>
            <p class="count">${count}</p>
        </div>`
}
export{addQuoteFromContainer}