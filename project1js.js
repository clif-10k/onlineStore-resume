const liholder = document.querySelector('#carousel-track');
const lilist = liholder.querySelectorAll('li');
lilist[0].querySelector("img").src = "top1.jpg";
lilist[1].querySelector("img").src = "top2.jpg";
lilist[2].querySelector("img").src = "top3.jpg";
lilist[0].firstChild.id = "Red_Shirt";
lilist[1].firstChild.id = "White_Shirt";
lilist[2].firstChild.id = "Yellow_Shirt";
var price = 8.00;
//button onclick change items in carousel 
function bottomclothes() {
    const liholder = document.querySelector('#carousel-track');
    const lilist = liholder.querySelectorAll('li');
    lilist[0].querySelector("img").src = "bottom1.jpg";
    lilist[1].querySelector("img").src = "bottom2.jpg";
    lilist[2].querySelector("img").src = "bottom3.jpg";
    lilist[0].firstChild.id = "Black_Shorts";
    lilist[1].firstChild.id = "Grey_Shorts";
    lilist[2].firstChild.id = "Orange_Shorts";
    price = 10.00;
}
function topclothes() {
    const liholder = document.querySelector('#carousel-track');
    const lilist = liholder.querySelectorAll('li');
    lilist[0].querySelector("img").src = "top1.jpg";
    lilist[1].querySelector("img").src = "top2.jpg";
    lilist[2].querySelector("img").src = "top3.jpg";
    lilist[0].firstChild.id = "Red_Shirt";
    lilist[1].firstChild.id = "White_Shirt";
    lilist[2].firstChild.id = "Yellow_Shirt";
    price = 8.00;
}
function outerwearclothes() {
    const liholder = document.querySelector('#carousel-track');
    const lilist = liholder.querySelectorAll('li');
    lilist[0].querySelector("img").src = "outerwear1.jpg";
    lilist[1].querySelector("img").src = "outerwear2.jpg";
    lilist[2].querySelector("img").src = "outerwear3.jpg"; 
    lilist[0].firstChild.id = "Blue_Life_Jacket";
    lilist[1].firstChild.id = "Grey_Life_Jacket";
    lilist[2].firstChild.id = "Orange_Life_Jacket";
    price = 10.50; 
}
function accessoriesclothes() {
    const liholder = document.querySelector('#carousel-track');
    const lilist = liholder.querySelectorAll('li');
    lilist[0].querySelector("img").src = "accessories1.jpg";
    console.log(lilist[0]);
    lilist[1].querySelector("img").src = "accessories2.jpg";
    lilist[2].querySelector("img").src = "accessories3.jpg";
    lilist[0].firstChild.id = "Beach_Bracelet";
    lilist[1].firstChild.id = "Beach_Necklace";
    lilist[2].firstChild.id = "Beach_Hat";
    price = 5.50;
}

//carousel ul tack and the pics in them which is li aka slides
const track = document.querySelector('#carousel-track');
const slides = Array.from(track.children);
//console.log(slides);

//carousel next/prev button and width of carousel pics
const nextButton = document.querySelector('#right');
const prevButton = document.querySelector('#left');
const slideWidth = slides[0].getBoundingClientRect().width;
/*console.log(slideWidth);*/

//arrange slides next to another
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentcarousel-slide');
    targetSlide.classList.add('currentcarousel-slide');
}

//when click left, move left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".currentcarousel-slide");
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
})

//when click right, move right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".currentcarousel-slide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
})

//when cart is clicked
var cart = document.getElementById("cart");
cart.addEventListener('click', function() {
    var currentSlide = track.querySelector(".currentcarousel-slide");
    var currentImg = currentSlide.querySelector('img');
    var quantity = document.querySelector('#quantity').valueAsNumber;
    var imageSrc = currentImg.src;
    var itemName = currentSlide.firstChild.id.replace('_',' ');
    addItemToCart(price,quantity,imageSrc,itemName);
})

//add item to cart and update price
function addItemToCart(price,quantity,imageSrc,itemName){
    var cartRow = document.createElement('tr');
    cartRow.classList.add('checkoutitem');
    var cartItems = document.getElementById('cartitems');
    var currentTotalID = document.getElementById('totalvalue');
    var oldTotal = parseFloat(currentTotalID.innerText.replace('$',''));
    var newTotal = oldTotal + (quantity*price);
    var cartRowContent = `
    <tr class="checkoutitem">
                    <td class = "item"><img src = ${imageSrc} height = "50" width = "50">${itemName}</td>
                    <td class = "quantity">${quantity}</td>
                    <td class = "Cost">${price} <button onclick="removeClicked(this)" class = "removebutton" style = "font-weight: bold; float: right; color: black; border-style: solid; border-color: black;background-color: palegoldenrod;">
                    remove</button> 
                    </td>
                </tr>
    `;
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    document.getElementById('totalvalue').innerText = "$" + newTotal;
    checkoutDisplay()
}
//remove item from cart and update price
function removeClicked(removeItemButton){
    var itemPrice = removeItemButton.parentElement.innerText.replace('remove','');
    var itemQuantity = removeItemButton.parentElement.previousElementSibling.innerHTML;
    var currentTotal = document.getElementById('totalvalue').innerText.replace('$','');
    var newTotal = currentTotal - (itemPrice*itemQuantity);
    removeItemButton.parentElement.parentElement.remove();
    document.getElementById('totalvalue').innerText = "$" + newTotal;
    checkoutDisplay();
}
//cart content confirmation, email prompt, and refresh cart
function purchaseClicked(){
    const itemListNames = document.getElementsByClassName('item');
    const itemListQuantity = document.getElementsByClassName('quantity');
    const finalNames = []
    const finalQuantity = []
    var counter = 0;
    var checkoutString = "Would you like to purchase "
    var quanString ="";
    var itemString="";
    //console.log(itemListNames);
    //console.log(itemListQuantity);
    for (item of itemListNames){
        finalNames[counter] = item.innerText;
        counter +=1;
    }
    counter = 0;
    for (item of itemListQuantity){
        finalQuantity[counter] = item.innerText;
        counter +=1;
    }

    counter = 0;
    finalNames.forEach(eachFunction)
    function eachFunction(item, index){ 
        quanString = finalQuantity[index];
        itemString = item + "(s) "; 
        var currentTotal = document.getElementById('totalvalue').innerText;
        if ((counter + 1) == finalNames.length){
            checkoutString = checkoutString + " and " + quanString + " " + itemString + "for a total of " + currentTotal + "? (Press Ok to confirm.)";
            return;
        }
        checkoutString = checkoutString + quanString + " " + itemString + ",";
        //console.log(checkoutString);
        counter++;
    }
    //console.log(checkoutString);

    if (confirm(checkoutString)) {
        if (prompt("Please Enter your E-mail for tracking and receipt.","example@gmail.com")){
            alert("Thank you for your purchase (Purchase Complete)");
            const checkoutItems = document.getElementById("cartitems");
            for (item of checkoutItems.children){
                //console.log(item);
                if (item.className == 'checkoutitem'){
                    checkoutItems.remove(item);
                }
            }
            var carttotal = document.getElementById("totalvalue");
            carttotal.innerHTML = '$0';
        } else {
            return;
        }
    } else {
        return;
    }
}
console.log(document.getElementById("cartitems").children.length);

function checkoutDisplay(){
    if(document.getElementById("cartitems").children.length > 1){
        console.log("block");
        document.getElementById("cartcheckout").style.display = "block";
    }
    else {
        console.log("none");
        document.getElementById("cartcheckout").style.display = "none";
    }
}