let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateTotal() {

    g1 = parseFloat(document.getElementById('g1').value);
    g2 = parseFloat(document.getElementById('g2').value);
    g3 = parseFloat(document.getElementById('g3').value);

    if(g1 >= 0 && g2 >= 0 && g3 >= 0) {
        pourchaseTotal = g1 + g2 + g3;
        document.getElementById('total').innerText = `The total of the pourchase is: ${pourchaseTotal}`;
    } else {
        document.getElementById('total').innerText = "Please use a real price";
    }
    
    
}