function getpicture () {
    let value = document.getElementById("options").value;
    console.log(value);
    if(value == "wChampagne" || value == "extraWChamp"){
        document.getElementById("white_pic").src = "Images/white-gift.jpeg";
        document.getElementById("pink_pic").src = "Images/pink-gift.jpeg";
        document.getElementById("red_pic").src = "Images/red-gift.jpeg";

        document.getElementById("white_name").innerHTML = "White Bouquet with Champagne";
        document.getElementById("pink_name").innerHTML = "Pink Bouquet  with Champagne";
        document.getElementById("red_name").innerHTML = "Red Bouquet  with Champagne";
        
        document.getElementById("white_price").innerHTML = "&#163; 50";
        document.getElementById("pink_price").innerHTML = "&#163; 50";
        document.getElementById("red_price").innerHTML = "&#163; 50";

    } else {
        document.getElementById("white_pic").src = "Images/white.jpeg";
        document.getElementById("pink_pic").src = "Images/pink.jpeg";
        document.getElementById("red_pic").src = "Images/red.jpeg";

        document.getElementById("white_name").innerHTML = "White Bouque";
        document.getElementById("pink_name").innerHTML = "Pink Bouquet";
        document.getElementById("red_name").innerHTML = "Red Bouquet";
        
        document.getElementById("white_price").innerHTML = "&#163; 24";
        document.getElementById("pink_price").innerHTML = "&#163; 24";
        document.getElementById("red_price").innerHTML = "&#163; 24";
    }
}

function placeOrder(){
    if(document.querySelector('input[name="colour"]:checked') != null){
        document.getElementById("order_image").style.visibility = "visible";
        document.getElementById("order_price").style.visibility = "visible";
        document.getElementById("order_name").style.visibility = "visible";
        let value = document.getElementById("options").value;
        let colour = document.querySelector('input[name="colour"]:checked').value;
        if(value=="wChampagne" || value=="extraWChamp"){
            switch(colour){
                case "white":
                    document.getElementById("order_image").src = "Images/white-gift.jpeg";
                    document.getElementById("order_name").innerHTML = "White Bouquet with Champagne";
                    document.getElementById("order_price").innerHTML = "&#163; 50";
                    break;
                case "pink":
                    document.getElementById("order_image").src = "Images/pink-gift.jpeg";
                    document.getElementById("order_name").innerHTML = "Pink Bouquet with Champagne";
                    document.getElementById("order_price").innerHTML = "&#163; 50";
                    break;
                case "red":
                    document.getElementById("order_image").src = "Images/red-gift.jpeg";
                    document.getElementById("order_name").innerHTML = "Red Bouquet with Champagne";
                    document.getElementById("order_price").innerHTML = "&#163; 50";
                    break
            }
        }else{
            switch(colour){
                case "white":
                    document.getElementById("order_image").src = "Images/white.jpeg";
                    document.getElementById("order_name").innerHTML = "White Bouquet";
                    document.getElementById("order_price").innerHTML = "&#163; 24";
                    break;
                case "pink":
                    document.getElementById("order_image").src = "Images/pink.jpeg";
                    document.getElementById("order_name").innerHTML = "Pink Bouquet";
                    document.getElementById("order_price").innerHTML = "&#163; 24";
                    break;
                case "red":
                    document.getElementById("order_image").src = "Images/red.jpeg";
                    document.getElementById("order_name").innerHTML = "Red Bouquet";
                    document.getElementById("order_price").innerHTML = "&#163; 24";
                    break
            }
        }
    } else {
        document.getElementById("place").disable = "true";
    }
}

function clearOrder(){
    // emptying order div
    document.getElementById("order_image").style.visibility = "hidden";
    document.getElementById("order_price").style.visibility = "hidden";
    document.getElementById("order_name").style.visibility = "hidden";
    // setting other divs
    document.getElementById("white_pic").src = "Images/white.jpeg";
    document.getElementById("pink_pic").src = "Images/pink.jpeg";
    document.getElementById("red_pic").src = "Images/red.jpeg";

    document.getElementById("white_name").innerHTML = "White Bouquet";
    document.getElementById("pink_name").innerHTML = "Pink Bouquet";
    document.getElementById("red_name").innerHTML = "Red Bouquet";
    
    document.getElementById("white_price").innerHTML = "&#163; 24";
    document.getElementById("pink_price").innerHTML = "&#163; 24";
    document.getElementById("red_price").innerHTML = "&#163; 24";
}

document.getElementById("place").addEventListener("click", placeOrder);
document.getElementById("clear").addEventListener("click", clearOrder);
document.getElementById("options").addEventListener("click", getpicture);