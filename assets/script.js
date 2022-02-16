//how many items we have
let totalQuantity = 1

//reference the text
let quantityText = document.querySelector(".total-quantity")

//reference the buttons
let upButton = document.querySelector("#quantity-up")
let downButton = document.querySelector("#quantity-down")

//register listeners for when buttons are clicked
upButton.addEventListener("click", function(){
    //window.alert("up button clicked")
    totalQuantity = totalQuantity + 1

    quantityText.textContent = "Quantity: "+ totalQuantity
})

downButton.addEventListener("click", function(){
    //window.alert("down button clicked")
    //if it is 0 we don't want to go negative
    if (totalQuantity > 0 ){
        totalQuantity = totalQuantity - 1
        quantityText.textContent = "Quantity: "+ totalQuantity
    }
})