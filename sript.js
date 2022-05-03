function generateColor(){
    var symbols,colors;
    symbols = "0123456789ABCDEF";
    colors = "#";
    for(var i=0;i<6;i++){
        colors = colors + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = colors;
    document.getElementById("hex").innerHTML = colors;
}