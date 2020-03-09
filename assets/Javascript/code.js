document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("Hello").src = "./assets/images/giphy.gif";
    document.getElementById("Hello").alt = "Obi-Wan Kenobi says, hello there!";

    setTimeout(function(){ 
        document.getElementById("Hello").src = "./assets/images/Snapchat-1637716371.jpg";
        document.getElementById("Hello").alt = "LJ holding his sister's dog Teeny";
    }, 5600);
})