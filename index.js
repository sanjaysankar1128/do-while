let text = "";
let i = 0

do{
    if (i % 2 !== 0) {
        text += "<br>The number is Odd " + i;


        console.log("Odd number", i);
    }
    i++;
}while (i < 100)
document.getElementById("demo").innerHTML = text;

